import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import { FiCopy, FiHeart, FiStar } from 'react-icons/fi';
import { FaHeart, FaStar } from 'react-icons/fa';
import SkillRow from '../components/SkillRow';

export default function DetailPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [avgRating, setAvgRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    fetchSkill();
  }, [id]);

  const fetchSkill = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('skills')
      .select('*, profiles(display_name), categories(name)')
      .eq('id', id)
      .single();
    setSkill(data);
    if (data) {
      fetchSocial(data);
      fetchSimilar(data.category_id, data.id);
    }
    setLoading(false);
  };

  const fetchSocial = async (skill) => {
    const [likes, ratings, cmts] = await Promise.all([
      supabase.from('likes').select('*').eq('skill_id', skill.id),
      supabase.from('ratings').select('*').eq('skill_id', skill.id),
      supabase.from('comments').select('*, profiles(display_name)').eq('skill_id', skill.id).order('created_at', { ascending: false }),
    ]);
    setLikeCount(likes.data?.length || 0);
    setLiked(likes.data?.some(l => l.user_id === user?.id) || false);
    const ratingData = ratings.data || [];
    setRatingCount(ratingData.length);
    setAvgRating(ratingData.length ? ratingData.reduce((s, r) => s + r.score, 0) / ratingData.length : 0);
    setUserRating(ratingData.find(r => r.user_id === user?.id)?.score || 0);
    setComments(cmts.data || []);
  };

  const fetchSimilar = async (categoryId, currentId) => {
    const { data } = await supabase
      .from('skills')
      .select('*, profiles(display_name), categories(name)')
      .eq('category_id', categoryId)
      .neq('id', currentId)
      .limit(6);
    setSimilar(data || []);
  };

  const handleInstall = async () => {
    if (!skill) return;
    try {
      await navigator.clipboard.writeText(skill.body);
      toast.success('Skill copied to clipboard! Save as ~/.claude/commands/' + skill.name + '.md');
      if (user) {
        await supabase.from('installs').insert({ user_id: user.id, skill_id: skill.id });
        await supabase.from('skills').update({ install_count: (skill.install_count || 0) + 1 }).eq('id', skill.id);
        setSkill(prev => ({ ...prev, install_count: (prev.install_count || 0) + 1 }));
      }
    } catch {
      toast.error('Failed to copy. Please try again.');
    }
  };

  const toggleLike = async () => {
    if (!user) return toast.error('Please sign in to like skills');
    if (liked) {
      await supabase.from('likes').delete().eq('skill_id', id).eq('user_id', user.id);
      setLiked(false);
      setLikeCount(c => c - 1);
    } else {
      await supabase.from('likes').insert({ skill_id: id, user_id: user.id });
      setLiked(true);
      setLikeCount(c => c + 1);
    }
  };

  const handleRate = async (score) => {
    if (!user) return toast.error('Please sign in to rate skills');
    const existing = userRating > 0;
    if (existing) {
      await supabase.from('ratings').update({ score }).eq('skill_id', id).eq('user_id', user.id);
    } else {
      await supabase.from('ratings').insert({ skill_id: id, user_id: user.id, score });
    }
    setUserRating(score);
    fetchSkill();
  };

  const addComment = async (e) => {
    e.preventDefault();
    if (!user) return toast.error('Please sign in to comment');
    if (!newComment.trim()) return;
    await supabase.from('comments').insert({ skill_id: id, user_id: user.id, body: newComment.trim() });
    setNewComment('');
    const { data } = await supabase.from('comments').select('*, profiles(display_name)').eq('skill_id', id).order('created_at', { ascending: false });
    setComments(data || []);
  };

  const deleteComment = async (commentId) => {
    await supabase.from('comments').delete().eq('id', commentId);
    setComments(comments.filter(c => c.id !== commentId));
  };

  if (loading) return <div className="loading-screen"><div className="spinner" /></div>;
  if (!skill) return <div className="detail-page"><h1>Skill not found</h1></div>;

  return (
    <div className="detail-page">
      <div className="detail-hero" style={{ background: `linear-gradient(to right, #141414 40%, transparent), url(${skill.thumbnail_url || ''})` }}>
        <div className="detail-info">
          <h1>{skill.name}</h1>
          <p className="detail-meta">
            By {skill.profiles?.display_name || 'Unknown'} | {skill.categories?.name} | {skill.difficulty}
          </p>
          <p className="detail-description">{skill.description}</p>
          <div className="detail-stats">
            <span>{skill.install_count || 0} installs</span>
            <span>{avgRating.toFixed(1)} ({ratingCount} ratings)</span>
            <span>{likeCount} likes</span>
          </div>
          <div className="detail-actions">
            <button className="install-btn" onClick={handleInstall}>
              <FiCopy /> Install (Copy to Clipboard)
            </button>
            <button className={`like-btn ${liked ? 'liked' : ''}`} onClick={toggleLike}>
              {liked ? <FaHeart /> : <FiHeart />} {likeCount}
            </button>
          </div>
        </div>
      </div>

      <div className="detail-content">
        <section className="rating-section">
          <h3>Rate this Skill</h3>
          <div className="stars">
            {[1, 2, 3, 4, 5].map(s => (
              <button key={s} onClick={() => handleRate(s)} className="star-btn">
                {s <= userRating ? <FaStar className="star-filled" /> : <FiStar />}
              </button>
            ))}
          </div>
        </section>

        {skill.usage_guide && (
          <section className="usage-section">
            <h3>Usage Guide</h3>
            <div className="usage-content">{skill.usage_guide}</div>
          </section>
        )}

        <section className="install-guide-section">
          <h3>How to Install</h3>
          <div className="install-guide">
            <ol>
              <li>Click the <strong>Install</strong> button above to copy the skill to your clipboard</li>
              <li>Open your terminal or file explorer</li>
              <li>Navigate to <code>~/.claude/commands/</code> (create the folder if it doesn't exist)</li>
              <li>Create a new file named <code>{skill.name}.md</code></li>
              <li>Paste the copied content into the file and save</li>
              <li>Restart Claude Code — the skill will appear as <code>/{skill.name}</code></li>
            </ol>
          </div>
        </section>

        <section className="target-roles">
          <h3>Target Job Roles</h3>
          <div className="role-tags">
            {(skill.target_job_roles || []).map(role => (
              <span key={role} className="role-tag">{role}</span>
            ))}
          </div>
        </section>

        <section className="comments-section">
          <h3>Comments ({comments.length})</h3>
          <form className="comment-form" onSubmit={addComment}>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              rows={3}
            />
            <button type="submit" className="comment-submit-btn">Post Comment</button>
          </form>
          <div className="comments-list">
            {comments.map(comment => (
              <div key={comment.id} className="comment">
                <div className="comment-header">
                  <strong>{comment.profiles?.display_name || 'User'}</strong>
                  <span className="comment-date">{new Date(comment.created_at).toLocaleDateString()}</span>
                  {user?.id === comment.user_id && (
                    <button className="comment-delete" onClick={() => deleteComment(comment.id)}>Delete</button>
                  )}
                </div>
                <p>{comment.body}</p>
              </div>
            ))}
          </div>
        </section>

        {similar.length > 0 && (
          <section className="similar-section">
            <SkillRow title="Similar Skills" skills={similar} />
          </section>
        )}
      </div>
    </div>
  );
}

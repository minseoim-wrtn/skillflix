import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const JOB_ROLES = ['frontend', 'backend', 'AI/ML', 'PM', 'designer', 'QA', 'DevOps', 'marketer'];

export default function ProfilePage() {
  const { user, profile, fetchProfile } = useAuth();
  const navigate = useNavigate();
  const [mySkills, setMySkills] = useState([]);
  const [installs, setInstalls] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editForm, setEditForm] = useState({ display_name: '', job_role: '', team_id: '' });
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    fetchMyData();
  }, [user]);

  const fetchMyData = async () => {
    const [skillsRes, installsRes, teamsRes] = await Promise.all([
      supabase.from('skills').select('*').eq('author_id', user.id).order('created_at', { ascending: false }),
      supabase.from('installs').select('*, skills(name, description)').eq('user_id', user.id).order('created_at', { ascending: false }),
      supabase.from('teams').select('*').order('name'),
    ]);
    setMySkills(skillsRes.data || []);
    setInstalls(installsRes.data || []);
    setTeams(teamsRes.data || []);
    if (profile) {
      setEditForm({ display_name: profile.display_name || '', job_role: profile.job_role || '', team_id: profile.team_id || '' });
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('profiles').update(editForm).eq('id', user.id);
    if (error) {
      toast.error('Failed to update profile');
    } else {
      toast.success('Profile updated!');
      fetchProfile(user.id);
      setEditing(false);
    }
  };

  const deleteSkill = async (skillId) => {
    if (!confirm('Are you sure you want to delete this skill?')) return;
    await supabase.from('skills').delete().eq('id', skillId);
    setMySkills(mySkills.filter(s => s.id !== skillId));
    toast.success('Skill deleted');
  };

  if (!user) return null;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>My Page</h1>
        {profile && !editing ? (
          <div className="profile-info">
            <h2>{profile.display_name}</h2>
            <p>{profile.job_role} | {profile.email}</p>
            <button className="edit-profile-btn" onClick={() => setEditing(true)}>Edit Profile</button>
          </div>
        ) : (
          <form className="profile-edit-form" onSubmit={handleProfileUpdate}>
            <input value={editForm.display_name} onChange={e => setEditForm(p => ({ ...p, display_name: e.target.value }))} placeholder="Display Name" />
            <select value={editForm.job_role} onChange={e => setEditForm(p => ({ ...p, job_role: e.target.value }))}>
              {JOB_ROLES.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
            <select value={editForm.team_id} onChange={e => setEditForm(p => ({ ...p, team_id: e.target.value }))}>
              <option value="">Select Team</option>
              {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
            </select>
            <div className="form-actions">
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditing(false)}>Cancel</button>
            </div>
          </form>
        )}
      </div>

      <section className="my-skills-section">
        <h2>My Skills ({mySkills.length})</h2>
        <div className="my-skills-grid">
          {mySkills.map(skill => (
            <div key={skill.id} className="my-skill-card">
              <Link to={`/skill/${skill.id}`}><h3>{skill.name}</h3></Link>
              <p>{skill.description}</p>
              <div className="skill-stats">
                <span>{skill.install_count || 0} installs</span>
                <span>{skill.difficulty}</span>
              </div>
              <div className="skill-actions">
                <Link to={`/skill/${skill.id}/edit`} className="edit-btn">Edit</Link>
                <button className="delete-btn" onClick={() => deleteSkill(skill.id)}>Delete</button>
              </div>
            </div>
          ))}
          {mySkills.length === 0 && <p className="empty-state">You haven't created any skills yet.</p>}
        </div>
      </section>

      <section className="install-history-section">
        <h2>Install History ({installs.length})</h2>
        <div className="install-history">
          {installs.map(install => (
            <div key={install.id} className="install-item">
              <Link to={`/skill/${install.skill_id}`}>{install.skills?.name || 'Unknown Skill'}</Link>
              <span className="install-date">{new Date(install.created_at).toLocaleDateString()}</span>
            </div>
          ))}
          {installs.length === 0 && <p className="empty-state">No install history yet.</p>}
        </div>
      </section>
    </div>
  );
}

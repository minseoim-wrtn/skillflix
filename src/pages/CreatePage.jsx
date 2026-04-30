import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const CATEGORIES = [
  { id: 'code-review', name: 'Code Review' },
  { id: 'automation', name: 'Automation' },
  { id: 'testing', name: 'Testing' },
  { id: 'documentation', name: 'Documentation' },
  { id: 'debugging', name: 'Debugging' },
  { id: 'refactoring', name: 'Refactoring' },
  { id: 'devops', name: 'DevOps' },
  { id: 'ai-ml', name: 'AI/ML' },
];

const DIFFICULTIES = ['beginner', 'intermediate', 'advanced'];
const JOB_ROLES = ['frontend', 'backend', 'AI/ML', 'PM', 'designer', 'QA', 'DevOps', 'marketer'];

export default function CreatePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    description: '',
    body: '',
    category_id: '',
    difficulty: 'beginner',
    target_job_roles: [],
    usage_guide: '',
    visibility: 'public',
  });
  const [preview, setPreview] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!user) {
    return (
      <div className="create-page">
        <h1>Creator Studio</h1>
        <p>Please sign in to create skills.</p>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const toggleRole = (role) => {
    setForm(prev => ({
      ...prev,
      target_job_roles: prev.target_job_roles.includes(role)
        ? prev.target_job_roles.filter(r => r !== role)
        : [...prev.target_job_roles, role],
    }));
  };

  const generateThumbnail = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h1 = Math.abs(hash % 360);
    const h2 = (h1 + 40) % 360;
    return `linear-gradient(135deg, hsl(${h1}, 70%, 30%), hsl(${h2}, 80%, 20%))`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.description || !form.body || !form.category_id) {
      return toast.error('Please fill in all required fields');
    }
    setSubmitting(true);
    const thumbnail_url = `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225">
        <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:hsl(${Math.abs([...form.name].reduce((h, c) => c.charCodeAt(0) + ((h << 5) - h), 0)) % 360}, 70%, 30%)"/>
          <stop offset="100%" style="stop-color:hsl(${(Math.abs([...form.name].reduce((h, c) => c.charCodeAt(0) + ((h << 5) - h), 0)) + 40) % 360}, 80%, 20%)"/>
        </linearGradient></defs>
        <rect width="400" height="225" fill="url(#g)"/>
        <text x="200" y="120" text-anchor="middle" fill="white" font-size="24" font-family="sans-serif">${form.name}</text>
      </svg>`
    )}`;

    const { data, error } = await supabase.from('skills').insert({
      ...form,
      author_id: user.id,
      thumbnail_url,
      install_count: 0,
    }).select().single();

    setSubmitting(false);
    if (error) {
      if (error.code === '23505') {
        toast.error('A skill with this name already exists');
      } else {
        toast.error('Failed to create skill: ' + error.message);
      }
    } else {
      toast.success('Skill created successfully!');
      navigate(`/skill/${data.id}`);
    }
  };

  return (
    <div className="create-page">
      <h1>Creator Studio</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Skill Name *</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="my-awesome-skill" />
        </div>
        <div className="form-group">
          <label>Description *</label>
          <input name="description" value={form.description} onChange={handleChange} placeholder="What does this skill do?" />
        </div>
        <div className="form-group">
          <label>Category *</label>
          <select name="category_id" value={form.category_id} onChange={handleChange}>
            <option value="">Select category</option>
            {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label>Difficulty</label>
          <select name="difficulty" value={form.difficulty} onChange={handleChange}>
            {DIFFICULTIES.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label>Target Job Roles</label>
          <div className="role-checkboxes">
            {JOB_ROLES.map(role => (
              <label key={role} className="checkbox-label">
                <input type="checkbox" checked={form.target_job_roles.includes(role)} onChange={() => toggleRole(role)} />
                {role}
              </label>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Visibility</label>
          <select name="visibility" value={form.visibility} onChange={handleChange}>
            <option value="public">Public</option>
            <option value="team-only">Team Only</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            Skill Body (Markdown) *
            <button type="button" className="preview-toggle" onClick={() => setPreview(!preview)}>
              {preview ? 'Edit' : 'Preview'}
            </button>
          </label>
          {preview ? (
            <div className="markdown-preview">{form.body}</div>
          ) : (
            <textarea name="body" value={form.body} onChange={handleChange} rows={15} placeholder="# My Skill&#10;&#10;Write the skill markdown content here..." />
          )}
        </div>
        <div className="form-group">
          <label>Usage Guide</label>
          <textarea name="usage_guide" value={form.usage_guide} onChange={handleChange} rows={4} placeholder="How to use this skill..." />
        </div>
        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? 'Publishing...' : 'Publish Skill'}
        </button>
      </form>
    </div>
  );
}

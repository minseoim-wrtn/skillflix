import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext';
import { JOB_ROLES, TEAMS } from '../constants';
import './AuthPage.css';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  // Form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [teamId, setTeamId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        // Validate signup fields
        if (!displayName.trim()) {
          toast.error('Display name is required');
          setLoading(false);
          return;
        }
        if (!jobRole) {
          toast.error('Please select your job role');
          setLoading(false);
          return;
        }
        if (!teamId) {
          toast.error('Please select your team');
          setLoading(false);
          return;
        }
        if (password.length < 6) {
          toast.error('Password must be at least 6 characters');
          setLoading(false);
          return;
        }

        await signUp({
          email: email.trim(),
          password,
          displayName: displayName.trim(),
          jobRole,
          teamId,
        });
        toast.success('Account created! Welcome to Skillflix.');
        navigate('/');
      } else {
        await signIn({ email: email.trim(), password });
        toast.success('Welcome back!');
        navigate('/');
      }
    } catch (err) {
      toast.error(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    // Reset form
    setEmail('');
    setPassword('');
    setDisplayName('');
    setJobRole('');
    setTeamId('');
  };

  return (
    <div className="auth-page">
      <div className="auth-bg-gradient" />
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="auth-logo">SKILLFLIX</h1>
          <p className="auth-tagline">Discover & Share Claude Code Skills</p>
        </div>

        <div className="auth-card">
          <h2 className="auth-title">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>

          <form onSubmit={handleSubmit} className="auth-form">
            {isSignUp && (
              <div className="form-group">
                <label htmlFor="displayName">Display Name</label>
                <input
                  id="displayName"
                  type="text"
                  placeholder="Your display name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                  autoComplete="name"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder={isSignUp ? 'Min 6 characters' : 'Your password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                autoComplete={isSignUp ? 'new-password' : 'current-password'}
              />
            </div>

            {isSignUp && (
              <>
                <div className="form-group">
                  <label htmlFor="jobRole">Job Role</label>
                  <select
                    id="jobRole"
                    value={jobRole}
                    onChange={(e) => setJobRole(e.target.value)}
                    required
                    className={jobRole === '' ? 'placeholder' : ''}
                  >
                    <option value="" disabled>
                      Select your role
                    </option>
                    {JOB_ROLES.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="teamId">Team / Department</label>
                  <select
                    id="teamId"
                    value={teamId}
                    onChange={(e) => setTeamId(e.target.value)}
                    required
                    className={teamId === '' ? 'placeholder' : ''}
                  >
                    <option value="" disabled>
                      Select your team
                    </option>
                    {TEAMS.map((team) => (
                      <option key={team.id} value={team.id}>
                        {team.name}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <button
              type="submit"
              className="auth-submit-btn"
              disabled={loading}
            >
              {loading
                ? 'Please wait...'
                : isSignUp
                  ? 'Create Account'
                  : 'Sign In'}
            </button>
          </form>

          <div className="auth-switch">
            <span>
              {isSignUp
                ? 'Already have an account?'
                : "Don't have an account?"}
            </span>
            <button
              type="button"
              className="auth-switch-btn"
              onClick={toggleMode}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

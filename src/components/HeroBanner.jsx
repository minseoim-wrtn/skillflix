import { Link } from 'react-router-dom';
import { FiInfo, FiCopy } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function HeroBanner({ skill }) {
  if (!skill) return null;

  const handleInstall = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(skill.body || '');
      toast.success('Skill copied to clipboard!');
    } catch {
      toast.error('Failed to copy');
    }
  };

  const gradientFromName = (name) => {
    let hash = 0;
    for (let i = 0; i < (name || '').length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h1 = Math.abs(hash % 360);
    const h2 = (h1 + 40) % 360;
    return `linear-gradient(135deg, hsl(${h1}, 70%, 25%), hsl(${h2}, 80%, 15%))`;
  };

  return (
    <div className="hero-banner" style={{ background: gradientFromName(skill.name) }}>
      <div className="hero-gradient" />
      <div className="hero-content">
        <span className="hero-badge">Top Skill</span>
        <h1 className="hero-title">{skill.name}</h1>
        <p className="hero-description">{skill.description}</p>
        <div className="hero-meta">
          <span>{skill.install_count || 0} installs</span>
          <span>{skill.difficulty}</span>
          <span>{skill.categories?.name || ''}</span>
        </div>
        <div className="hero-actions">
          <button className="hero-install-btn" onClick={handleInstall}>
            <FiCopy /> Install
          </button>
          <Link to={`/skill/${skill.id}`} className="hero-info-btn">
            <FiInfo /> More Info
          </Link>
        </div>
      </div>
    </div>
  );
}

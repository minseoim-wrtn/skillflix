import { Link } from 'react-router-dom';

export default function SkillCard({ skill, rank }) {
  const gradientFromName = (name) => {
    let hash = 0;
    for (let i = 0; i < (name || '').length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h1 = Math.abs(hash % 360);
    const h2 = (h1 + 40) % 360;
    return `linear-gradient(135deg, hsl(${h1}, 70%, 30%), hsl(${h2}, 80%, 20%))`;
  };

  const thumbnail = skill.thumbnail_url && !skill.thumbnail_url.startsWith('data:')
    ? `url(${skill.thumbnail_url})`
    : gradientFromName(skill.name);

  return (
    <Link to={`/skill/${skill.id}`} className="skill-card">
      {rank != null && <span className="skill-rank">{rank}</span>}
      <div className="skill-card-thumb" style={{ background: thumbnail, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="skill-card-overlay">
          <h4 className="skill-card-name">{skill.name}</h4>
          <p className="skill-card-desc">{skill.description}</p>
          <div className="skill-card-meta">
            <span>{skill.install_count || 0} installs</span>
            <span className={`difficulty-badge ${skill.difficulty}`}>{skill.difficulty}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

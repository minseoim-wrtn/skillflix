import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamSkills, setTeamSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    const { data: teamsData } = await supabase.from('teams').select('*').order('name');
    if (teamsData) {
      const teamsWithStats = await Promise.all(
        teamsData.map(async (team) => {
          const { data: profiles } = await supabase.from('profiles').select('id').eq('team_id', team.id);
          const userIds = (profiles || []).map(p => p.id);
          let totalInstalls = 0;
          let skillCount = 0;
          if (userIds.length > 0) {
            const { data: skills } = await supabase.from('skills').select('install_count').in('author_id', userIds);
            skillCount = skills?.length || 0;
            totalInstalls = (skills || []).reduce((sum, s) => sum + (s.install_count || 0), 0);
          }
          return { ...team, totalInstalls, skillCount, memberCount: userIds.length };
        })
      );
      teamsWithStats.sort((a, b) => b.totalInstalls - a.totalInstalls);
      setTeams(teamsWithStats);
    }
    setLoading(false);
  };

  const selectTeam = async (team) => {
    setSelectedTeam(team);
    const { data: profiles } = await supabase.from('profiles').select('id').eq('team_id', team.id);
    const userIds = (profiles || []).map(p => p.id);
    if (userIds.length > 0) {
      const { data } = await supabase.from('skills').select('*, profiles(display_name), categories(name)').in('author_id', userIds);
      setTeamSkills(data || []);
    } else {
      setTeamSkills([]);
    }
  };

  if (loading) return <div className="loading-screen"><div className="spinner" /></div>;

  return (
    <div className="teams-page">
      <h1>Production House</h1>
      <p className="teams-subtitle">Team Rankings by Total Installs</p>

      <div className="teams-layout">
        <div className="teams-list">
          {teams.map((team, index) => (
            <div
              key={team.id}
              className={`team-card ${selectedTeam?.id === team.id ? 'active' : ''}`}
              onClick={() => selectTeam(team)}
            >
              <span className="team-rank">#{index + 1}</span>
              <div className="team-info">
                <h3>{team.name}</h3>
                <p>{team.memberCount} members | {team.skillCount} skills</p>
              </div>
              <div className="team-installs">
                <strong>{team.totalInstalls}</strong>
                <span>installs</span>
              </div>
            </div>
          ))}
        </div>

        {selectedTeam && (
          <div className="team-detail">
            <h2>{selectedTeam.name} Skills</h2>
            <div className="team-skills-grid">
              {teamSkills.map(skill => (
                <Link key={skill.id} to={`/skill/${skill.id}`} className="team-skill-card">
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
                  <div className="skill-meta">
                    <span>{skill.install_count} installs</span>
                    <span>{skill.profiles?.display_name}</span>
                  </div>
                </Link>
              ))}
              {teamSkills.length === 0 && <p className="empty-state">No skills from this team yet.</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

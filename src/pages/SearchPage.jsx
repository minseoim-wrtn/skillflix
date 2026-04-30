import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import SkillCard from '../components/SkillCard';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [jobFilter, setJobFilter] = useState(searchParams.get('role') || '');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const jobRoles = ['frontend', 'backend', 'AI/ML', 'PM', 'designer', 'QA', 'DevOps', 'marketer'];

  useEffect(() => {
    if (query || jobFilter) {
      searchSkills();
    }
  }, [query, jobFilter]);

  const searchSkills = async () => {
    setLoading(true);
    let q = supabase.from('skills').select('*, profiles(display_name), categories(name)');
    if (query) {
      q = q.or(`name.ilike.%${query}%,description.ilike.%${query}%`);
    }
    if (jobFilter) {
      q = q.contains('target_job_roles', [jobFilter]);
    }
    const { data } = await q;
    setResults(data || []);
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ q: query, ...(jobFilter && { role: jobFilter }) });
  };

  return (
    <div className="search-page">
      <h1>Search Skills</h1>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search skills..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <select
          value={jobFilter}
          onChange={(e) => setJobFilter(e.target.value)}
          className="role-filter"
        >
          <option value="">All Roles</option>
          {jobRoles.map(role => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
        <button type="submit" className="search-btn">Search</button>
      </form>
      {loading ? (
        <div className="loading-screen"><div className="spinner" /></div>
      ) : (
        <div className="search-results">
          {results.length === 0 && (query || jobFilter) && (
            <p className="no-results">No skills found. Try different keywords.</p>
          )}
          {results.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      )}
    </div>
  );
}

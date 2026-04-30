import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import SkillRow from '../components/SkillRow';
import HeroBanner from '../components/HeroBanner';

export default function HomePage() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const { data } = await supabase
      .from('skills')
      .select('*, profiles(display_name), categories(name)')
      .order('install_count', { ascending: false });
    setSkills(data || []);
    setLoading(false);
  };

  if (loading) {
    return <div className="loading-screen"><div className="spinner" /></div>;
  }

  const top10 = skills.slice(0, 10);
  const trending = [...skills].sort((a, b) => b.install_count - a.install_count).slice(0, 20);
  const newest = [...skills].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 20);

  const categories = [...new Set(skills.map(s => s.category_id))];
  const categoryRows = categories.slice(0, 3).map(catId => {
    const catSkills = skills.filter(s => s.category_id === catId);
    const catName = catSkills[0]?.categories?.name || 'Category';
    return { title: catName, skills: catSkills };
  });

  return (
    <div className="home-page">
      {top10.length > 0 && <HeroBanner skill={top10[0]} />}
      <div className="rows-container">
        <SkillRow title="Top 10 Skills" skills={top10} numbered />
        <SkillRow title="Trending Now" skills={trending} />
        <SkillRow title="New Releases" skills={newest} />
        {categoryRows.map((row, i) => (
          <SkillRow key={i} title={row.title} skills={row.skills} />
        ))}
      </div>
    </div>
  );
}

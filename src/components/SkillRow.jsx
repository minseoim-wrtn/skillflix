import { useRef } from 'react';
import SkillCard from './SkillCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function SkillRow({ title, skills, numbered }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  if (!skills || skills.length === 0) return null;

  return (
    <div className="skill-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-container">
        <button className="row-arrow row-arrow-left" onClick={() => scroll('left')}>
          <FiChevronLeft />
        </button>
        <div className="row-scroll" ref={scrollRef}>
          {skills.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} rank={numbered ? i + 1 : undefined} />
          ))}
        </div>
        <button className="row-arrow row-arrow-right" onClick={() => scroll('right')}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

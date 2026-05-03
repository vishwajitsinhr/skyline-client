import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

const statsData = [
  { value: 500, suffix: 'Cr+', label: 'Loans Disbursed', prefix: '₹', icon: '💰' },
  { value: 10000, suffix: '+', label: 'Happy Clients', prefix: '', icon: '😊' },
  { value: 50, suffix: '+', label: 'Lending Partners', prefix: '', icon: '🏦' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate', prefix: '', icon: '⭐' },
];

const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
};

const StatItem = ({ stat, started }) => {
  const count = useCountUp(stat.value, 2000, started);
  return (
    <div className="stat-item">
      <div className="stat-icon">{stat.icon}</div>
      <div className="stat-number">
        {stat.prefix}{count.toLocaleString('en-IN')}{stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
};

const Stats = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-bg" />
      <div className="container">
        <div className="stats-grid">
          {statsData.map((s, i) => (
            <StatItem key={i} stat={s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
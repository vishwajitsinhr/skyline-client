import React from 'react';
import './About.css';

const About = () => {
  const values = [
    { icon: '🎯', title: 'Customer First', desc: 'Every decision we make puts the client\'s interest at the center.' },
    { icon: '🔒', title: 'Transparency', desc: 'No hidden fees, no surprises — just honest financial guidance.' },
    { icon: '⚡', title: 'Speed', desc: 'Fast approvals within 48 hours so you never miss an opportunity.' },
    { icon: '🤝', title: 'Long-term Trust', desc: 'We build relationships that last well beyond the loan tenure.' },
  ];

  return (
    <section className="about" id="about">
      <div className="about-deco" />
      <div className="container about-inner">
        <div className="about-left">
          <div className="about-img-wrap">
            <div className="about-img-main">
              <div className="about-img-placeholder">
                <div className="img-icon">🏙️</div>
                <p>Skyline Finserv<br/>— Ahmedabad</p>
              </div>
            </div>
            <div className="about-stat-card">
              <span className="stat-num">10+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="about-img-accent" />
          </div>
        </div>

        <div className="about-right">
          <span className="section-tag">About Us</span>
          <h2 className="about-heading">
            Your Trusted Partner in
            <span className="gold-text"> Financial Growth</span>
          </h2>
          <p className="about-desc">
            Skyline Finserv is a leading financial services company based in Ahmedabad,
            Gujarat. Since 2015, we have been empowering individuals and businesses with
            smart loan solutions tailored to their unique needs.
          </p>
          <p className="about-desc">
            From first-time homebuyers to seasoned entrepreneurs, our expert advisors
            guide you through every step of the financing journey — with clarity,
            integrity, and a deep commitment to your success.
          </p>

          <div className="about-values">
            {values.map((v, i) => (
              <div className="value-item" key={i}>
                <div className="value-icon">{v.icon}</div>
                <div>
                  <h4 className="value-title">{v.title}</h4>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary" style={{ marginTop: '32px' }}>
            Talk to an Advisor
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: '⚡',
    title: '48-Hour Approval',
    desc: 'We process your application and deliver approval within 48 working hours — faster than any bank.',
    color: '#e6a817',
  },
  {
    icon: '📋',
    title: 'Minimal Documentation',
    desc: 'No mountains of paperwork. Our streamlined process requires only what\'s truly necessary.',
    color: '#1a6b3c',
  },
  {
    icon: '💸',
    title: 'Competitive Rates',
    desc: 'We partner with 50+ lenders to bring you the best available interest rates for your profile.',
    color: '#1a3a6b',
  },
  {
    icon: '🧑‍💼',
    title: 'Dedicated Relationship Manager',
    desc: 'Every client gets a personal advisor who stays with you from application to final disbursal.',
    color: '#7a3a00',
  },
  {
    icon: '🔍',
    title: 'Transparent Process',
    desc: 'Complete visibility at every step. No hidden charges, no surprise fees — ever.',
    color: '#5b1a6b',
  },
  {
    icon: '🔄',
    title: 'Balance Transfer Support',
    desc: 'Already have a loan? Switch to us for better rates and save thousands over the tenure.',
    color: '#1a5b6b',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-us" id="why-us">
      <div className="why-us-bg" />
      <div className="container">
        <div className="why-us-header">
          <span className="section-tag">Why Skyline Finserv</span>
          <h2 className="why-heading">
            We Make Borrowing
            <span className="gold-text"> Simple & Smart</span>
          </h2>
          <p className="why-sub">
            Six compelling reasons why thousands of clients trust Skyline Finserv
            for their most important financial decisions.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div className="why-card" key={i}>
              <div className="why-card-num">0{i + 1}</div>
              <div className="why-icon" style={{ background: `${r.color}15`, color: r.color }}>
                {r.icon}
              </div>
              <h3 className="why-card-title">{r.title}</h3>
              <p className="why-card-desc">{r.desc}</p>
              <div className="why-card-bar" style={{ background: r.color }} />
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="process-section">
          <h3 className="process-heading">Our Simple 4-Step Process</h3>
          <div className="process-steps">
            {[
              { step: '01', title: 'Apply Online', desc: 'Fill out our simple form in 5 minutes' },
              { step: '02', title: 'Document Upload', desc: 'Submit minimal required documents' },
              { step: '03', title: 'Quick Approval', desc: 'Get approved within 48 hours' },
              { step: '04', title: 'Disbursement', desc: 'Money in your account, fast' },
            ].map((p, i) => (
              <div className="process-step" key={i}>
                <div className="ps-number">{p.step}</div>
                <div className="ps-connector" />
                <div className="ps-content">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
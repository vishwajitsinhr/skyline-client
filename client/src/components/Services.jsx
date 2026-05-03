import React, { useState } from 'react';
import './Services.css';

const services = [
  {
    icon: '🏠',
    title: 'Home Loan',
    tagline: 'Own your dream home',
    desc: 'Get financing for your new home, construction, or renovation with competitive interest rates and flexible repayment options up to 30 years.',
    rate: 'From 8.5% p.a.',
    tenure: 'Up to 30 Years',
    amount: 'Up to ₹5 Cr',
    features: ['Minimal Documentation', 'Quick Disbursal', 'Balance Transfer'],
    color: '#1a6b3c',
    bg: '#edf7f1',
  },
  {
    icon: '🏢',
    title: 'Loan Against Property',
    tagline: 'Unlock your asset value',
    desc: 'Leverage your residential or commercial property to get higher loan amounts for personal or business needs with ease.',
    rate: 'From 9% p.a.',
    tenure: 'Up to 20 Years',
    amount: 'Up to ₹10 Cr',
    features: ['Residential & Commercial', 'High LTV Ratio', 'No End-Use Restriction'],
    color: '#1a3a6b',
    bg: '#edf2f7',
  },
  {
    icon: '💼',
    title: 'Business Loan',
    tagline: 'Fuel your growth',
    desc: 'Unsecured business loans for MSMEs and growing enterprises to meet working capital requirements, expansion, and equipment needs.',
    rate: 'From 10% p.a.',
    tenure: 'Up to 7 Years',
    amount: 'Up to ₹2 Cr',
    features: ['No Collateral Needed', 'Fast Processing', 'Flexible Repayment'],
    color: '#7a3a00',
    bg: '#fdf4e8',
  },
  {
    icon: '👤',
    title: 'Personal Loan',
    tagline: 'For every life moment',
    desc: 'Quick unsecured personal loans for weddings, travel, medical emergencies, home renovation, or any personal need.',
    rate: 'From 10.5% p.a.',
    tenure: 'Up to 5 Years',
    amount: 'Up to ₹25 L',
    features: ['Zero Collateral', 'Same-Day Approval', 'Minimal Documentation'],
    color: '#5b1a6b',
    bg: '#f5edf7',
  },
  {
    icon: '🔄',
    title: 'Working Capital',
    tagline: 'Keep your business moving',
    desc: 'Tailored working capital solutions including overdraft, cash credit, and bill discounting to maintain healthy cash flow.',
    rate: 'From 9.5% p.a.',
    tenure: 'Revolving Credit',
    amount: 'Up to ₹5 Cr',
    features: ['Revolving Facility', 'Interest on Utilized Amount', 'Quick Renewal'],
    color: '#1a5b6b',
    bg: '#edf6f7',
  },
  {
    icon: '📊',
    title: 'Financial Guidance',
    tagline: 'Expert-led financial planning',
    desc: 'Our certified advisors help you plan your finances, choose the right loan product, and structure your repayments for maximum benefit.',
    rate: 'Free Consultation',
    tenure: 'Ongoing Support',
    amount: 'Personalized',
    features: ['Credit Score Advisory', 'Loan Restructuring', 'Tax Planning'],
    color: '#6b1a1a',
    bg: '#f7edec',
  },
];

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="services" id="services">
      <div className="services-top-deco" />
      <div className="container">
        <div className="services-header">
          <span className="section-tag">Our Services</span>
          <h2 className="services-heading">
            Financial Solutions Built
            <br />
            <span className="gold-text">Around Your Life</span>
          </h2>
          <p className="services-sub">
            From home ownership to business expansion, Skyline Finserv has a tailored
            loan product for every milestone.
          </p>
        </div>

        <div className="services-tabs">
          {services.map((s, i) => (
            <button
              key={i}
              className={`tab-btn ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="tab-icon">{s.icon}</span>
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        <div className="services-panel">
          {services.map((s, i) => (
            <div key={i} className={`service-detail ${active === i ? 'active' : ''}`}>
              <div className="sd-left" style={{ background: s.bg }}>
                <div className="sd-icon-wrap" style={{ color: s.color }}>
                  {s.icon}
                </div>
                <h3 className="sd-title" style={{ color: s.color }}>{s.title}</h3>
                <p className="sd-tagline">{s.tagline}</p>
                <p className="sd-desc">{s.desc}</p>
                <ul className="sd-features">
                  {s.features.map((f, fi) => (
                    <li key={fi}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2.5">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-primary" style={{ marginTop: '28px', background: s.color }}>
                  Apply Now →
                </a>
              </div>

              <div className="sd-right">
                <div className="sd-metrics">
                  <div className="metric-card">
                    <span className="metric-icon">💰</span>
                    <span className="metric-value">{s.rate}</span>
                    <span className="metric-label">Interest Rate</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-icon">📅</span>
                    <span className="metric-value">{s.tenure}</span>
                    <span className="metric-label">Loan Tenure</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-icon">🏦</span>
                    <span className="metric-value">{s.amount}</span>
                    <span className="metric-label">Loan Amount</span>
                  </div>
                </div>

                <div className="sd-cta-box">
                  <h4>Get Instant Eligibility Check</h4>
                  <p>Find out how much you can borrow in under 2 minutes.</p>
                  <a href="#contact" className="btn-outline" style={{ color: 'var(--navy)', borderColor: 'var(--navy)' }}>
                    Check Eligibility
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
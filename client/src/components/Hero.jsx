import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add('loaded'), 100);
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Background layers */}
      <div className="hero-bg">
        <div className="hero-overlay" />
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>

      <div className="container hero-content">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" />
            Trusted Financial Partner Since 2015
          </div>

          <h1 className="hero-heading">
            Unlock Your
            <span className="hero-highlight"> Financial</span>
            <br />Dreams Today
          </h1>

          <p className="hero-sub">
            Skyline Finserv provides tailored loan solutions — from Home Loans
            to Business Capital — designed to empower your goals with speed,
            transparency, and trust.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Apply Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#services" className="btn-outline">Explore Services</a>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <strong>₹500 Cr+</strong>
              <span>Loans Disbursed</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <strong>10,000+</strong>
              <span>Happy Clients</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <strong>48 Hrs</strong>
              <span>Quick Approval</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card-stack">
            <div className="loan-card loan-card-1">
              <div className="lc-icon">🏠</div>
              <div className="lc-info">
                <span className="lc-label">Home Loan</span>
                <span className="lc-rate">Starting @ 8.5% p.a.</span>
              </div>
              <div className="lc-badge">Popular</div>
            </div>
            <div className="loan-card loan-card-2">
              <div className="lc-icon">🏢</div>
              <div className="lc-info">
                <span className="lc-label">Business Loan</span>
                <span className="lc-rate">Starting @ 10% p.a.</span>
              </div>
            </div>
            <div className="loan-card loan-card-3">
              <div className="lc-icon">💼</div>
              <div className="lc-info">
                <span className="lc-label">Loan Against Property</span>
                <span className="lc-rate">Starting @ 9% p.a.</span>
              </div>
            </div>

            <div className="hero-emi-calc">
              <div className="emi-title">EMI Calculator</div>
              <div className="emi-value">₹ 18,500 / mo</div>
              <div className="emi-sub">for ₹20L at 8.5% · 20 yrs</div>
              <div className="emi-bar">
                <div className="emi-fill" style={{ width: '62%' }} />
              </div>
            </div>

            <div className="hero-badge-float">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span>RBI Registered</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
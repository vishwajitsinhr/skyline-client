import React from 'react';
import './Footer.css';

const Footer = () => {
  const services = [
    'Home Loan', 'Loan Against Property', 'Business Loan',
    'Personal Loan', 'Working Capital', 'Financial Guidance',
  ];

  const quickLinks = ['About Us', 'Services', 'Why Choose Us', 'Contact', 'Privacy Policy', 'Terms of Service'];

  return (
    <footer className="footer">
      <div className="footer-wave" />

      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">S</div>
              <div className="footer-logo-text">
                <span>Skyline</span>
                <small>Finserv</small>
              </div>
            </div>
            <p className="footer-about">
              Skyline Finserv is your trusted financial partner, helping individuals
              and businesses achieve their goals through smart, transparent loan solutions.
            </p>
            <div className="footer-badges">
              <span className="fbadge">🏛️ RBI Registered</span>
              <span className="fbadge">🔒 ISO 27001</span>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links">
              {services.map((s) => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Get in Touch</h4>
            <div className="footer-contact-items">
              <div className="fci">
                <span>📍</span>
                <span>Ahmedabad, Gujarat — 380001</span>
              </div>
              <div className="fci">
                <span>📞</span>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
              <div className="fci">
                <span>✉️</span>
                <a href="mailto:info@skylinefinserv.in">info@skylinefinserv.in</a>
              </div>
              <div className="fci">
                <span>⏰</span>
                <span>Mon–Sat: 9:30 AM – 6:30 PM</span>
              </div>
            </div>

            <div className="footer-newsletter">
              <p>Get financial tips in your inbox</p>
              <div className="newsletter-row">
                <input type="email" placeholder="your@email.com" />
                <button>→</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Skyline Finserv. All rights reserved.</p>
          <p className="footer-disclaimer">
            Loans are subject to credit approval. Interest rates may vary. T&C apply.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
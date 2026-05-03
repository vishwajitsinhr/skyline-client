import React, { useState } from 'react';
import './Contact.css';

const loanTypes = [
  'Home Loan',
  'Loan Against Property',
  'Business Loan',
  'Personal Loan',
  'Working Capital',
  'Financial Guidance',
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', loanType: '', amount: '', message: ''
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', phone: '', email: '', loanType: '', amount: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-bg" />
      <div className="container contact-inner">
        <div className="contact-left">
          <span className="section-tag">Contact Us</span>
          <h2 className="contact-heading">
            Let's Start Your
            <span className="gold-text"> Financial Journey</span>
          </h2>
          <p className="contact-sub">
            Fill in the form and our advisor will call you within 2 hours on
            working days. Completely free consultation, zero obligation.
          </p>

          <div className="contact-info">
            {[
              { icon: '📍', label: 'Visit Us', value: 'Ahmedabad, Gujarat — India' },
              { icon: '📞', label: 'Call Us', value: '+91 98765 43210' },
              { icon: '✉️', label: 'Email Us', value: 'info@skylinefinserv.in' },
              { icon: '⏰', label: 'Office Hours', value: 'Mon – Sat, 9:30 AM – 6:30 PM' },
            ].map((item, i) => (
              <div className="contact-info-item" key={i}>
                <div className="ci-icon">{item.icon}</div>
                <div>
                  <div className="ci-label">{item.label}</div>
                  <div className="ci-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-social">
            {['Facebook', 'LinkedIn', 'Instagram', 'WhatsApp'].map((s) => (
              <a key={s} href="#" className="social-chip">{s}</a>
            ))}
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-form-card">
            <h3 className="form-title">Get a Free Consultation</h3>
            <p className="form-sub">Response within 2 hours on working days</p>

            {status === 'success' && (
              <div className="form-success">
                ✅ Thank you! Our advisor will contact you shortly.
              </div>
            )}
            {status === 'error' && (
              <div className="form-error">
                ❌ Something went wrong. Please try again or call us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="lead-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Loan Type *</label>
                  <select name="loanType" value={form.loanType} onChange={handleChange} required>
                    <option value="">Select a loan type</option>
                    {loanTypes.map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Loan Amount Required</label>
                  <input
                    name="amount"
                    type="text"
                    value={form.amount}
                    onChange={handleChange}
                    placeholder="e.g. ₹25 Lakhs"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Message (Optional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a little more about your requirement..."
                  rows={3}
                />
              </div>

              <button type="submit" className="btn-primary form-submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Request a Callback'}
                {!loading && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                )}
              </button>

              <p className="form-disclaimer">
                🔒 Your information is secure and will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
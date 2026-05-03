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

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Full name is required';
  else if (form.name.trim().length < 3) errors.name = 'Name must be at least 3 characters';
  if (!form.phone.trim()) errors.phone = 'Phone number is required';
  else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s+/g, ''))) errors.phone = 'Enter a valid 10-digit Indian mobile number';
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email address';
  if (!form.loanType) errors.loanType = 'Please select a loan type';
  return errors;
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', loanType: '', amount: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setLoading(true); setStatus(null);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus('success'); setForm({ name: '', phone: '', email: '', loanType: '', amount: '', message: '' }); setErrors({}); }
      else setStatus('error');
    } catch { setStatus('error'); }
    setLoading(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-bg" />
      <div className="container contact-inner">
        <div className="contact-left">
          <span className="section-tag">Contact Us</span>
          <h2 className="contact-heading">Let's Start Your <span className="gold-text"> Financial Journey</span></h2>
          <p className="contact-sub">Fill in the form and our advisor will call you within 2 hours on working days. Completely free consultation, zero obligation.</p>
          <div className="contact-info">
            {[
              { icon: '📍', label: 'Visit Us', value: 'Ahmedabad, Gujarat — India' },
              { icon: '📞', label: 'Call Us', value: '+91 98765 43210' },
              { icon: '✉️', label: 'Email Us', value: 'info@skylinefinserv.in' },
              { icon: '⏰', label: 'Office Hours', value: 'Mon – Sat, 9:30 AM – 6:30 PM' },
            ].map((item, i) => (
              <div className="contact-info-item" key={i}>
                <div className="ci-icon">{item.icon}</div>
                <div><div className="ci-label">{item.label}</div><div className="ci-value">{item.value}</div></div>
              </div>
            ))}
          </div>
          <div className="contact-social">
            {['Facebook', 'LinkedIn', 'Instagram', 'WhatsApp'].map((s) => (<a key={s} href="#" className="social-chip">{s}</a>))}
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-form-card">
            <h3 className="form-title">Get a Free Consultation</h3>
            <p className="form-sub">Response within 2 hours on working days</p>
            {status === 'success' && <div className="form-success">✅ Thank you! Our advisor will contact you shortly.</div>}
            {status === 'error' && <div className="form-error">❌ Something went wrong. Please try again or call us directly.</div>}
            <form onSubmit={handleSubmit} className="lead-form" noValidate>
              <div className="form-row">
                <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                  <label>Full Name *</label>
                  <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your full name" />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
                <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                  <label>Phone Number *</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="10-digit mobile number" maxLength={10} />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>
              </div>
              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label>Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
              <div className="form-row">
                <div className={`form-group ${errors.loanType ? 'has-error' : ''}`}>
                  <label>Loan Type *</label>
                  <select name="loanType" value={form.loanType} onChange={handleChange}>
                    <option value="">Select a loan type</option>
                    {loanTypes.map((l) => (<option key={l} value={l}>{l}</option>))}
                  </select>
                  {errors.loanType && <span className="field-error">{errors.loanType}</span>}
                </div>
                <div className="form-group">
                  <label>Loan Amount Required</label>
                  <input name="amount" type="text" value={form.amount} onChange={handleChange} placeholder="e.g. ₹25 Lakhs" />
                </div>
              </div>
              <div className="form-group">
                <label>Message (Optional)</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us more about your requirement..." rows={3} />
              </div>
              <button type="submit" className="btn-primary form-submit" disabled={loading}>
                {loading ? <><span className="btn-spinner" /> Submitting...</> : <>Request a Callback <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></>}
              </button>
              <p className="form-disclaimer">🔒 Your information is secure and will never be shared with third parties.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
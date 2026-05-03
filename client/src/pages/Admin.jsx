import React, { useState, useEffect } from 'react';
import './Admin.css';

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'skyline@2025';
const ADMIN_TOKEN = 'skyline-admin-secret-2025';

const statusColors = {
  new: '#c9a84c',
  contacted: '#1a6b3c',
  converted: '#1a3a6b',
  lost: '#c0392b',
};

const Admin = () => {
  const [authed, setAuthed] = useState(false);
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (creds.username === ADMIN_USER && creds.password === ADMIN_PASS) {
      setAuthed(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/leads', {
        headers: {
          'x-admin-token': ADMIN_TOKEN,
        },
      });

      if (res.status === 401) {
        setError('Unauthorized — invalid admin token.');
        setLoading(false);
        return;
      }

      const data = await res.json();
      if (data.success) {
        setLeads(data.data);
      } else {
        setError(data.message || 'Failed to fetch leads.');
      }
    } catch (err) {
      setError('Cannot connect to server. Make sure backend is running on port 5000.');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (authed) fetchLeads();
  }, [authed]);

  const updateStatus = async (id, status) => {
    try {
      await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': ADMIN_TOKEN,
        },
        body: JSON.stringify({ status }),
      });
      fetchLeads();
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const filteredLeads = leads.filter((l) => {
    const matchFilter = filter === 'all' || l.status === filter;
    const matchSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.phone.includes(search) ||
      l.loanType.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === 'new').length,
    contacted: leads.filter((l) => l.status === 'contacted').length,
    converted: leads.filter((l) => l.status === 'converted').length,
  };

  // ─── Login Screen ───
  if (!authed) {
    return (
      <div className="admin-login">
        <div className="al-card">
          <div className="al-logo">
            <div className="al-icon">S</div>
            <div className="al-brand">
              <span>Skyline Finserv</span>
              <small>Admin Panel</small>
            </div>
          </div>
          <h2 className="al-title">Sign In</h2>
          <form onSubmit={handleLogin} className="al-form">
            <div className="al-group">
              <label>Username</label>
              <input
                type="text"
                value={creds.username}
                onChange={(e) => setCreds({ ...creds, username: e.target.value })}
                placeholder="admin"
                required
              />
            </div>
            <div className="al-group">
              <label>Password</label>
              <input
                type="password"
                value={creds.password}
                onChange={(e) => setCreds({ ...creds, password: e.target.value })}
                placeholder="••••••••"
                required
              />
            </div>
            {loginError && <div className="al-error">❌ {loginError}</div>}
            <button type="submit" className="al-btn">Sign In →</button>
          </form>
        </div>
      </div>
    );
  }

  // ─── Dashboard ───
  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="ad-header">
        <div className="ad-header-left">
          <div className="ad-logo">S</div>
          <div>
            <h1>Skyline Finserv</h1>
            <p>Leads Dashboard</p>
          </div>
        </div>
        <div className="ad-header-right">
          <button className="ad-refresh" onClick={fetchLeads}>🔄 Refresh</button>
          <button className="ad-logout" onClick={() => setAuthed(false)}>Sign Out</button>
        </div>
      </header>

      <div className="ad-body">

        {/* Error Banner */}
        {error && (
          <div className="ad-error-banner">
            ❌ {error}
          </div>
        )}

        {/* Stats */}
        <div className="ad-stats">
          {[
            { label: 'Total Leads', value: stats.total, icon: '📋', color: '#0a1628' },
            { label: 'New', value: stats.new, icon: '🆕', color: '#c9a84c' },
            { label: 'Contacted', value: stats.contacted, icon: '📞', color: '#1a6b3c' },
            { label: 'Converted', value: stats.converted, icon: '✅', color: '#1a3a6b' },
          ].map((s, i) => (
            <div className="ad-stat-card" key={i} style={{ borderTop: `3px solid ${s.color}` }}>
              <span className="adsc-icon">{s.icon}</span>
              <span className="adsc-value">{s.value}</span>
              <span className="adsc-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="ad-filters">
          <input
            type="text"
            className="ad-search"
            placeholder="🔍 Search by name, phone, loan type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="ad-filter-btns">
            {['all', 'new', 'contacted', 'converted', 'lost'].map((f) => (
              <button
                key={f}
                className={`ad-filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <div className="ad-loading">⏳ Loading leads...</div>
        ) : filteredLeads.length === 0 ? (
          <div className="ad-empty">
            <span>📭</span>
            <p>{leads.length === 0 ? 'No leads yet. Submit the contact form to see data here.' : 'No leads match your search/filter.'}</p>
          </div>
        ) : (
          <div className="ad-table-wrap">
            <table className="ad-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Loan Type</th>
                  <th>Amount</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead, i) => (
                  <tr key={lead.id}>
                    <td>{i + 1}</td>
                    <td><strong>{lead.name}</strong></td>
                    <td>
                      <a href={`tel:${lead.phone}`} className="ad-phone">📞 {lead.phone}</a>
                    </td>
                    <td>{lead.email || '—'}</td>
                    <td><span className="ad-loan-tag">{lead.loanType}</span></td>
                    <td>{lead.amount || '—'}</td>
                    <td className="ad-message">{lead.message || '—'}</td>
                    <td>{new Date(lead.createdAt).toLocaleDateString('en-IN')}</td>
                    <td>
                      <span
                        className="ad-status"
                        style={{
                          background: `${statusColors[lead.status]}20`,
                          color: statusColors[lead.status],
                        }}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td>
                      <select
                        className="ad-status-select"
                        value={lead.status}
                        onChange={(e) => updateStatus(lead.id, e.target.value)}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="converted">Converted</option>
                        <option value="lost">Lost</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
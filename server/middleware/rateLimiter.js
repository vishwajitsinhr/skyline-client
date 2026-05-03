const rateLimit = require('express-rate-limit');

// ✅ General API rate limiter — 100 requests per 15 mins
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'Too many requests. Please try again after 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// ✅ Lead submission limiter — max 5 leads per hour per IP
const leadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many submissions from this IP. Please try again after an hour.' },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { generalLimiter, leadLimiter };
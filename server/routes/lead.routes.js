const express = require('express');
const router = express.Router();
const { createLead, getAllLeads, updateLeadStatus } = require('../controllers/lead.controller');
const { leadLimiter } = require('../middleware/rateLimiter');
const adminAuth = require('../middleware/adminAuth');

// Public — rate limited
router.post('/', leadLimiter, createLead);

// Admin only — protected
router.get('/', adminAuth, getAllLeads);
router.patch('/:id', adminAuth, updateLeadStatus);

module.exports = router;
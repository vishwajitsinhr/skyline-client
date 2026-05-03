const express = require('express');
const router = express.Router();
const { createLead, getAllLeads, updateLeadStatus } = require('../controllers/lead.controller');

// Public
router.post('/', createLead);

// Admin (protect these with auth middleware in production)
router.get('/', getAllLeads);
router.patch('/:id', updateLeadStatus);

module.exports = router;
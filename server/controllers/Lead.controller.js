const Lead = require('../models/Lead.model');

const createLead = async (req, res) => {
  try {
    const { name, phone, email, loanType, amount, message } = req.body;

    if (!name || !phone || !loanType) {
      return res.status(400).json({
        success: false,
        message: 'Name, phone, and loan type are required.',
      });
    }

    const lead = await Lead.create({ name, phone, email, loanType, amount, message });

    return res.status(201).json({
      success: true,
      message: 'Lead submitted successfully. Our advisor will contact you shortly.',
      data: lead,
    });
  } catch (err) {
    console.error('createLead error:', err.message);
    return res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

const getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.findAll({ order: [['createdAt', 'DESC']] });
    return res.status(200).json({ success: true, count: leads.length, data: leads });
  } catch (err) {
    console.error('getAllLeads error:', err.message);
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
};

const updateLeadStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const lead = await Lead.findByPk(req.params.id);
    if (!lead) return res.status(404).json({ success: false, message: 'Lead not found.' });
    await lead.update({ status });
    return res.status(200).json({ success: true, data: lead });
  } catch (err) {
    console.error('updateLeadStatus error:', err.message);
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
};

module.exports = { createLead, getAllLeads, updateLeadStatus };
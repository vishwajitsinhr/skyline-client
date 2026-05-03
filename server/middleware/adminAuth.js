require('dotenv').config({ path: '../.env' });

const adminAuth = (req, res, next) => {
  const token = req.headers['x-admin-token'];
  const validToken = process.env.ADMIN_TOKEN || 'skyline-admin-secret-2025';

  console.log('Admin token received:', token);
  console.log('Expected token:', validToken);

  if (!token || token !== validToken) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized. Admin access required.',
    });
  }

  next();
};

module.exports = adminAuth;
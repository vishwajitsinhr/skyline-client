const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });

const sequelize = require('./config/db');
const Lead = require('./models/Lead.model');
const leadRoutes = require('./routes/lead.routes');

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/leads', leadRoutes);
app.get('/api/health', (_, res) => res.json({ status: 'ok', service: 'Skyline Finserv API' }));

const PORT = process.env.PORT || 5000;

sequelize
  .authenticate()
  .then(() => {
    console.log('✅ PostgreSQL connected');
    return sequelize.sync({ alter: true }); // auto creates/updates tables
  })
  .then(() => {
    console.log('✅ Tables synced');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1);
  });
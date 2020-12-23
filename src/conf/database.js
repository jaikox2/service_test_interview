const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || 'admin',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'jaikox2',
  password: process.env.DB_PASSWORD || '5393',
  port: process.env.DB_PORT || 5432,
  max: 20,
});

module.exports = pool;

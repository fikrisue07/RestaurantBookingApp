const { Pool } = require('pg');

const pool = new Pool({
    user: 'your_database_user',
    host: 'localhost',
    database: 'restaurant_booking',
    password: 'your_database_password',
    port: 5432,
});

module.exports = pool;

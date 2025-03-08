import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: process.env.DB_NAME || 'ucash',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'Admin1', // Make sure this matches your PostgreSQL password
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('❌ Unable to connect to the database:', err);
  });

export default sequelize;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DATABASE_URL || 'postgres://takei:postgres@localhost/mikan-counter',
  { logging: true }
);

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};

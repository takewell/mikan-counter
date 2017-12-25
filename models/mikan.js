const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Mikan = loader.database.define(
  'mikan',
  {
    mikanId: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: false
    },
    count: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    createdBy: {
      type: Sequelize.BIGINT,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Mikan;

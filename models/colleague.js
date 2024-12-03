const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Colleague = sequelize.define('Colleague', {
  colleague_name: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING },
});

Colleague.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Colleague;

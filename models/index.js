const sequelize = require('../config/database');
const User = require('./user');
const Task = require('./task');
const Group = require('./group');
const Colleague = require('./colleague');

sequelize.sync({ alter: true });

module.exports = { User, Task, Group, Colleague };

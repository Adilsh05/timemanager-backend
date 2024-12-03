const { Group, User } = require('../models');

exports.getGroups = async (req, res) => {
  try {
    const groups = await Group.findAll();
    res.status(200).json(groups);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createGroup = async (req, res) => {
  const { name } = req.body;
  try {
    const group = await Group.create({ name });
    res.status(201).json(group);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.addMember = async (req, res) => {
  const { id } = req.params; // ID группы
  const { user_id } = req.body; // ID пользователя
  try {
    const group = await Group.findByPk(id);
    if (!group) return res.status(404).json({ message: 'Group not found' });

    await group.addUser(user_id);
    res.status(200).json({ message: 'Member added to group' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

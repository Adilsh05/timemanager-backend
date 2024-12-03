const { Colleague } = require('../models');

exports.getColleagues = async (req, res) => {
  try {
    const colleagues = await Colleague.findAll();
    res.status(200).json(colleagues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateColleague = async (req, res) => {
  const { id } = req.params;
  const { colleague_name, role, status } = req.body;
  try {
    const colleague = await Colleague.findByPk(id);
    if (!colleague) return res.status(404).json({ message: 'Colleague not found' });

    await colleague.update({ colleague_name, role, status });
    res.status(200).json(colleague);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

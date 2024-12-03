const express = require('express');
const { getColleagues, updateColleague } = require('../controllers/colleagueController');
const router = express.Router();

router.get('/', getColleagues); // Получить список коллег
router.put('/:id', updateColleague); // Обновить данные коллеги

module.exports = router;

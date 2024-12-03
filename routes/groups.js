const express = require('express');
const { getGroups, createGroup, addMember } = require('../controllers/groupController');
const router = express.Router();

router.get('/', getGroups); // Получить все группы
router.post('/', createGroup); // Создать группу
router.post('/:id/add-member', addMember); // Добавить участника в группу

module.exports = router;

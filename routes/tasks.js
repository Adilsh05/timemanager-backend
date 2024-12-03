const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();

router.get('/', getTasks); // Получить все задачи пользователя
router.post('/', createTask); // Создать задачу
router.put('/:id', updateTask); // Обновить задачу
router.delete('/:id', deleteTask); // Удалить задачу

module.exports = router;

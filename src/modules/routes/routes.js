const express = require('express');
const router = express.Router();

const {
    getAllTasks,
    createNewTask,
    changeTaskText,
    changeIsCheck,
    deleteTask
} = require ('../controllers/task.controllers');

router.get('/allTasks', getAllTasks);
router.post('/createTask', createNewTask);
router.patch('/updateTask', changeIsCheck);
router.patch('/updateTaskText', changeTaskText);
router.delete('/deleteTask', deleteTask);

module.exports = router;
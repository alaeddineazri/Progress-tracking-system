//project routes
const express = require('express');
const router = express.Router();
//import from controllers
const { createTask ,deleteTask,updateTask, getTaskById , getAllTasks} = require('../controllers/task');
//import middleware



// create task router
router.post('/task/create/',createTask)
//delete task
router.delete('/task/delete/:taskId',deleteTask)
//update task
router.put('/task/update/:taskId', updateTask)
//get all tasks
router.get('/task/all/', getAllTasks)
//get task by id
router.get('/task/:taskId', getTaskById)




module.exports = router;
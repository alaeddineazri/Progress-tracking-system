const express = require('express');
const router = express.Router();

const { createTaskMilestone , deleteTaskMilestone , updateTaskMilestone , getAllTaskMilestones , getTaskMilestoneById } = require('../controllers/taskMilestone');

//create milestone router
router.post('/taskMilestone/create/',createTaskMilestone)
//update milestone
router.put('/taskMilestone/update/:taskMilestoneId', updateTaskMilestone)
//delete milestone
router.delete('/taskMilestone/delete/:taskMilestoneId', deleteTaskMilestone)
//get all milestones
router.get('/taskMilestone/all/', getAllTaskMilestones)
//get milestone by id
router.get('/taskMilestone/:taskMilestoneId', getTaskMilestoneById)





module.exports = router;

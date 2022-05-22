const express = require('express');
const router = express.Router();
//import from controllers
const { createMilestone , updateMilestone , deleteMilestone , getAllMilestones , getMilestoneById } = require('../controllers/milestone');

//create milestone router
router.post('/milestone/create/',createMilestone)
//update milestone
router.put('/milestone/update/:milestoneId', updateMilestone)
//delete milestone
router.delete('/milestone/delete/:milestoneId', deleteMilestone)
//get all milestones
router.get('/milestone/all/', getAllMilestones)
//get milestone by id
router.get('/milestone/:milestoneId', getMilestoneById)





module.exports = router;

//project routes
const express = require('express');
const router = express.Router();
//import from controllers
const { createProject , deleteProject , updateProject , getAllProjects , getProjectById } = require('../controllers/project');
//import middleware






// create project router
router.post('/project/create/',createProject)
//delete project
router.delete('/project/delete/:projectId',deleteProject)
//update project
router.put('/project/update/:projectId', updateProject)
//get all projects  
router.get('/project/all/', getAllProjects)
//get project by id
router.get('/project/:projectId', getProjectById)




module.exports = router;
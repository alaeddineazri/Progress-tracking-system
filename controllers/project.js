//project Controller
const Project = require('../models/project');
const { errorHandler } = require("../helpers/dbErrHandler");

// create project controller
exports.createProject = (req, res) => {
    const project = new Project(req.body); 
    project.save()
        .then(result => {
            res.status(201).json({
                message: 'Project created successfully!',
                project: result
            });
        })
        .catch(err => {
            console.log(err);
            errorHandler(err, res);
        });
}

// delete project controller
exports.deleteProject = (req, res) => {
    Project.findByIdAndRemove(req.params.projectId)
        .then(project => {
            if (!project) {
                return res.status(404).json({
                    message: 'Project not found with id ' + req.params.projectId
                });
            }
            res.status(200).json({
                message: 'Project deleted successfully!'
            });
        }
        )
        .catch(err => {
            console.log(err);
            errorHandler(err, res);
        });
}   



// update project controller
exports.updateProject = (req, res) => {
    Project.findByIdAndUpdate(req.params.projectId, {
        $set: req.body
    }, { new: true })
        .then(project => {
            if (!project) {
                return res.status(404).json({
                    message: 'Project not found with id ' + req.params.projectId
                });
            }
            res.status(200).json({
                message: 'Project updated successfully!',
                project: project
            });
        }
        )
        .catch(err => {
            console.log(err);
            errorHandler(err, res);
        });
}

// get all projects controller
exports.getAllProjects = (req, res) => {
    Project.find()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            console.log(err);
            errorHandler(err, res);
        });
}

// get project by id controller
exports.getProjectById = (req, res) => {
    Project.findById(req.params.projectId)
        .then(project => {
            if (!project) {
                return res.status(404).json({
                    message: 'Project not found with id ' + req.params.projectId
                });
            }
            res.status(200).json(project);
        }
        )
        .catch(err => {
            console.log(err);
            errorHandler(err, res);
        });
}
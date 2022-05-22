//taskMilestones controller
const TaskMilestone = require('../models/taskMilestone');
const { errorHandler } = require("../helpers/dbErrHandler");

//create taskMilestone
exports.createTaskMilestone = (req, res) => {
    const taskMilestone = new TaskMilestone(req.body); 
    taskMilestone.save()
        .then(result => {
            res.status(201).json({
                message: 'TaskMilestone created successfully!',
                taskMilestone: result
            });
        })
        .catch(err => {
            console.log(err);
            errorHandler(err, res);
        });
}

// delete taskMilestone
exports.deleteTaskMilestone = (req, res) => {
    TaskMilestone.findByIdAndRemove(req.params.taskMilestoneId)
        .then(taskMilestone => {
            if (!taskMilestone) {
                return res.status(404).json({
                    message: 'TaskMilestone not found with id ' + req.params.taskMilestoneId
                });
            }
            res.status(200).json({
                message: 'TaskMilestone deleted successfully!'
            });
        }
        )
        .catch(err => {
            console.log(err);
            errorHandler(err, res);
        });
}


// update taskMilestone
exports.updateTaskMilestone = (req, res) => {
    TaskMilestone.findByIdAndUpdate(req.params.taskMilestoneId, {
        $set: req.body
    }, { new: true })
        .then(taskMilestone => {
            if (!taskMilestone) {
                return res.status(404).json({
                    message: 'TaskMilestone not found with id ' + req.params.taskMilestoneId
                });
            }
            res.status(200).json({
                message: 'TaskMilestone updated successfully!',
                taskMilestone: taskMilestone
            });
        }
        )
        .catch(err => {
            console.log(err);
            errorHandler(err, res);
        });
}


// get all taskMilestones
exports.getAllTaskMilestones = (req, res) => {
    TaskMilestone.find()
        .then(taskMilestones => {
            res.status(200).json({
                message: 'TaskMilestones fetched successfully!',
                taskMilestones: taskMilestones
            });
        }
        )
        .catch(err => {
            console.log(err);
            errorHandler(err, res);
        });
}


// get taskMilestone by id
exports.getTaskMilestoneById = (req, res) => {
    TaskMilestone.findById(req.params.taskMilestoneId)
        .then(taskMilestone => {
            if (!taskMilestone) {
                return res.status(404).json({
                    message: 'TaskMilestone not found with id ' + req.params.taskMilestoneId
                });
            }
            res.status(200).json({
                message: 'TaskMilestone fetched successfully!',
                taskMilestone: taskMilestone
            });
        }
        )
        .catch(err => {
            console.log(err);
            errorHandler(err, res);
        });
}

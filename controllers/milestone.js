//milestones controller
const Milestone = require('../models/milestone');
const { errorHandler } = require("../helpers/dbErrHandler");

//create Milestone
exports.createMilestone = (req, res) => {
    const milestone = new Milestone(req.body); 
    milestone.save()
        .then(result => {
            res.status(201).json({
                message: 'Milestone created successfully!',
                milestone: result
            });
        })
        .catch(err => {
            console.log(err);
            errorHandler(err, res);
        });
}

// delete Milestone
exports.deleteMilestone = (req, res) => {
    Milestone.findByIdAndRemove(req.params.milestoneId)
        .then(milestone => {
            if (!milestone) {
                return res.status(404).json({
                    message: 'Milestone not found with id ' + req.params.milestoneId
                });
            }
            res.status(200).json({
                message: 'Milestone deleted successfully!'
            });
        }
        )
        .catch(err => {
            console.log(err);
            errorHandler(err, res);
        });
}

// update Milestone
exports.updateMilestone = (req, res) => {
    Milestone.findByIdAndUpdate(req.params.milestoneId, {
        $set: req.body
    }, { new: true })
        .then(milestone => {
            if (!milestone) {
                return res.status(404).json({
                    message: 'Milestone not found with id ' + req.params.milestoneId
                });
            }
            res.status(200).json({
                message: 'Milestone updated successfully!',
                milestone: milestone
            });
        }
        )
        .catch(err => {
            console.log(err);
            errorHandler(err, res);
        });
}

// get all Milestones
exports.getAllMilestones = (req, res) => {
    Milestone.find()
        .then(milestones => {
            res.status(200).json(milestones);
        })
        .catch(err => {
            console.log(err);
            errorHandler(err, res);
        });
}

// get Milestone by id
exports.getMilestoneById = (req, res) => {
    Milestone.findById(req.params.milestoneId)
        .then(milestone => {
            if (!milestone) {
                return res.status(404).json({
                    message: 'Milestone not found with id ' + req.params.milestoneId
                });
            }
            res.status(200).json(milestone);
        }
        )
        .catch(err => {
            console.log(err);
            errorHandler(err, res);
        });
}
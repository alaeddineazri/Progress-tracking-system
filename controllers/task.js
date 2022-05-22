const { errorHandler } = require("../helpers/dbErrHandler");
const Task = require("../models/task");

//create Task
exports.createTask = (req, res) => {
  const task = new Task(req.body); 
  console.log(req.body);
  task.save()
      .then(result => {
          res.status(201).json({
              message: 'Task created successfully!',
              project: result
          });
      })
      .catch(err => {
          console.log(err);
          errorHandler(err, res);
      });
}

//delete Task
exports.deleteTask = (req, res) => {
  Task.findByIdAndRemove(req.params.taskId)
      .then(task => {
          if (!task) {
              return res.status(404).json({
                  message: 'Task not found with id ' + req.params.taskId
              });
          }
          res.status(200).json({
              message: 'Task deleted successfully!'
          });
      }
      )
      .catch(err => {
          console.log(err);
          errorHandler(err, res);
      });
}

//update Task
exports.updateTask = (req, res) => {
  Task.findByIdAndUpdate(req.params.taskId, {
      $set: req.body
  }, { new: true })
      .then(task => {
          if (!task) {
              return res.status(404).json({
                  message: 'Task not found with id ' + req.params.taskId
              });
          }
          res.status(200).json({
              message: 'Task updated successfully!',
              task: task
          });
      }
      )
      .catch(err => {
          console.log(err);
          errorHandler(err, res);
      });
}


//get all tasks
exports.getAllTasks = (req, res) => {
  Task.find()
      .then(tasks => {
          res.status(200).json(tasks);
      }
      )
      .catch(err => {
          console.log(err);
          errorHandler(err, res);
      });
}


//get task by id
exports.getTaskById = (req, res) => {

  Task.findById(req.params.taskId)
      .then(task => {
          if (!task) {
              return res.status(404).json({
                  message: 'Task not found with id ' + req.params.taskId
              });
          }
          res.status(200).json({
              message: 'Task found successfully!',
              task: task
          });
      }
      )
      .catch(err => {
          console.log(err);
          errorHandler(err, res);
      });
}



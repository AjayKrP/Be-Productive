const db = require("../models");
const Task = db.tasks;
const Op = db.Sequelize.Op;

// Create and Save a new Tasks
exports.create = (req, res) => {
    console.log(req.body);
    if (!req.body.description) {
        res.status(400).send({
            message: "Description can not be empty!"
        });
        return;
    }

    // Create a Task
    const task = {
        description: req.body.description,
        dueDate: req.body.dueDate,
        label: req.body.label ? req.body.label : 'Personal',
        status: req.body.status ? req.body.status : 'New'
    };

    // Save Task in the database
    Task.create(task)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Task."
            });
        });
};

// Retrieve all Tasks from the database.
exports.findAll = (req, res) => {
    const description = req.query.description;
    var condition = description ? { description: { [Op.like]: `%${description}%` } } : null;

    Task.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single Task with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Task.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            });
        });
};

// Update a Task by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    //TODO validate body
    console.log(id);
    console.log(req.body)
    Task.update(req.body, {
        where: { id: id }
    }).then(num => {
        console.log(num)
            if (num === 1) {
                res.send({
                    message: "Task was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Task with id=${id}. Maybe Task was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
};

// Delete a Task with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Task.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Task was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Task was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Task with id=" + id
            });
        });
};

// Delete all Tasks from the database.
exports.deleteAll = (req, res) => {
    Task.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tasks were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
};

// Find all published Tasks
exports.findAllTaskDone = (req, res) => {
    Task.findAll({ where: { taskDone: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tasks."
            });
        });
};

exports.markTaskAsDone = (req, res) => {
    const id = req.params.id;
    let updateValues = { taskDone: true };
    console.log('make as done: ' + id);
    Task.update(updateValues, {
        where: { id: id }
    }).then(num => {
        console.log(num)
        if (num === 1) {
            res.send({
                message: `Task id ${id} marked as done`
            });
        } else {
            res.send({
                message: `Cannot update Task with id=${id}. Maybe Task was not found or req.body is empty!`
            });
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
};
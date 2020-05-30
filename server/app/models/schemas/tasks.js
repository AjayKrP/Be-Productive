module.exports = (sequelize, Sequelize) => {
    return sequelize.define("tasks", {
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        dueDate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        label: {
            type:   Sequelize.ENUM,
            values: ['Personal', 'Work', 'Shopping', 'Others'],
            defaultValue: 'Personal',
        },
        status: {
            type:   Sequelize.ENUM,
            values: ['New', 'In Progress', 'Completed'],
            defaultValue: 'New',
        },
        taskDone: {
            type: Sequelize.BOOLEAN
        }
    });
};
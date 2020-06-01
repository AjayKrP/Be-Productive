module.exports = app => {
    const tasks = require("../controllers");

    var router = require("express").Router();

    // Create a new Task
    router.post("/", tasks.create);

    // Retrieve all Tasks
    router.get("/", tasks.findAll);

    // Retrieve all published Tasks
    router.get("/published", tasks.findAllTaskDone);

    // Retrieve a single Task with id
    router.get("/:id", tasks.findOne);

    // Update a Task with id
    router.put("/:id", tasks.update);

    // Delete a Task with id
    router.delete("/:id", tasks.delete);

    // Create a new Task
    router.delete("/", tasks.deleteAll);

    // Create a new Task
    router.put("/done/:id", tasks.markTaskAsDone);

    app.use('/api/tasks', router);

};
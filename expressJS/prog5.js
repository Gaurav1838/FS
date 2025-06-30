const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [
    {
        id: 1,
        title: "Buy groceries",
        description: "Milk, Eggs, Bread",
        status: "pending"
    },
    {
        id: 2,
        title: "Finish project",
        description: "Complete task manager API",
        status: "in-progress"
    }
];

// Generate unique task IDs
let nextId = 3;

app.get('/tasks', (req, res) => {
    res.send(tasks);
});

app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);

    if (!task) {
        return res.status(404).send({ message: 'Task not found' });
    }

    res.send(task);
});

app.post('/tasks', (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).send({ message: 'Title and description are required' });
    }

    const newTask = {
        id: nextId++,
        title,
        description,
        status: "pending"
    };

    tasks.push(newTask);
    res.send(newTask);
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).send({ message: 'Task not found' });
    }

    const deletedTask = tasks.splice(taskIndex, 1)[0];
    res.send({ message: 'Task deleted', task: deletedTask });
});

app.listen(PORT, () => {
    console.log(`Task Manager API is running on http://localhost:${PORT}`);
});

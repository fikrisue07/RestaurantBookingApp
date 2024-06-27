const express = require('express');
const router = express.Router();

// Dummy data
let users = [
    { id: 1, username: 'admin', email: 'admin@example.com' },
    { id: 2, username: 'user1', email: 'user1@example.com' }
];

// Get all users
router.get('/', (req, res) => {
    res.json(users);
});

// Add a new user
router.post('/', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Edit a user
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index] = { id, ...req.body };
        res.json(users[index]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Delete a user
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.status(204).end();
});

module.exports = router;


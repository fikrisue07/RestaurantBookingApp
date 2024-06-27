const express = require('express');
const router = express.Router();

// Dummy data
let restaurants = [
    { id: 1, name: 'Restaurant A', address: 'Address A', phone: '123-456-7890' },
    { id: 2, name: 'Restaurant B', address: 'Address B', phone: '098-765-4321' }
];

// Get all restaurants
router.get('/', (req, res) => {
    res.json(restaurants);
});

// Add a new restaurant
router.post('/', (req, res) => {
    const newRestaurant = { id: restaurants.length + 1, ...req.body };
    restaurants.push(newRestaurant);
    res.status(201).json(newRestaurant);
});

// Edit a restaurant
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = restaurants.findIndex(restaurant => restaurant.id === id);
    if (index !== -1) {
        restaurants[index] = { id, ...req.body };
        res.json(restaurants[index]);
    } else {
        res.status(404).json({ message: 'Restaurant not found' });
    }
});

// Delete a restaurant
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    restaurants = restaurants.filter(restaurant => restaurant.id !== id);
    res.status(204).end();
});

module.exports = router;


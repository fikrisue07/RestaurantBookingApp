const express = require('express');
const router = express.Router();

// Dummy data
let reservations = [
    { id: 1, username: 'admin', restaurant: 'Restaurant A', date: '2024-07-01T19:00:00', guests: 2 },
    { id: 2, username: 'user1', restaurant: 'Restaurant B', date: '2024-07-02T20:00:00', guests: 4 }
];

// Get all reservations
router.get('/', (req, res) => {
    res.json(reservations);
});

// Add a new reservation
router.post('/', (req, res) => {
    const newReservation = { id: reservations.length + 1, ...req.body };
    reservations.push(newReservation);
    res.status(201).json(newReservation);
});

// Edit a reservation
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = reservations.findIndex(reservation => reservation.id === id);
    if (index !== -1) {
        reservations[index] = { id, ...req.body };
        res.json(reservations[index]);
    } else {
        res.status(404).json({ message: 'Reservation not found' });
    }
});

// Delete a reservation
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    reservations = reservations.filter(reservation => reservation.id !== id);
    res.status(204).end();
});

module.exports = router;


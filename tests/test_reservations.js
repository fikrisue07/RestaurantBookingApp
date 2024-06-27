const request = require('supertest');
const express = require('express');
const app = require('../server'); // Asumsikan server.js mengekspor app Express

describe('Backend API Tests', () => {
    test('GET /api/reservations should return all reservations', async () => {
        const res = await request(app).get('/api/reservations');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    test('POST /api/reservations should create a new reservation', async () => {
        const newReservation = {
            user_id: 1,
            restaurant_id: 1,
            reservation_date: '2024-07-01T19:00:00',
            guests: 2
        };
        const res = await request(app).post('/api/reservations').send(newReservation);
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
    });
});


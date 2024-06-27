const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Restaurant Booking API');
});

// Import routes
const reservations = require('./routes/reservations');
const users = require('./routes/users');
const restaurants = require('./routes/restaurants');

app.use('/api/reservations', reservations);
app.use('/api/users', users);
app.use('/api/restaurants', restaurants);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


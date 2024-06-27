document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservation-form');
    const reservationsList = document.getElementById('reservations-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const restaurant = document.getElementById('restaurant').value;
        const date = document.getElementById('date').value;
        const guests = document.getElementById('guests').value;

        addReservation(username, restaurant, date, guests);
    });

    function addReservation(username, restaurant, date, guests) {
        const reservation = document.createElement('div');
        reservation.className = 'reservation';
        reservation.innerHTML = `
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Restaurant:</strong> ${restaurant}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Number of Guests:</strong> ${guests}</p>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        reservation.querySelector('.edit-btn').addEventListener('click', () => {
            editReservation(reservation);
        });

        reservation.querySelector('.delete-btn').addEventListener('click', () => {
            deleteReservation(reservation);
        });

        reservationsList.appendChild(reservation);
    }

    function editReservation(reservation) {
        const username = prompt('Enter new username:', reservation.querySelector('strong:nth-child(1)').textContent);
        const restaurant = prompt('Enter new restaurant:', reservation.querySelector('strong:nth-child(2)').textContent);
        const date = prompt('Enter new date:', reservation.querySelector('strong:nth-child(3)').textContent);
        const guests = prompt('Enter new number of guests:', reservation.querySelector('strong:nth-child(4)').textContent);

        if (username && restaurant && date && guests) {
            reservation.querySelector('strong:nth-child(1)').textContent = username;
            reservation.querySelector('strong:nth-child(2)').textContent = restaurant;
            reservation.querySelector('strong:nth-child(3)').textContent = date;
            reservation.querySelector('strong:nth-child(4)').textContent = guests;
        }
    }

    function deleteReservation(reservation) {
        reservationsList.removeChild(reservation);
    }
});


-- Seed users
INSERT INTO users (username, email, password) VALUES
('admin', 'admin@example.com', 'adminpass'),
('user1', 'user1@example.com', 'user1pass');

-- Seed restaurants
INSERT INTO restaurants (name, address, phone) VALUES
('Restaurant A', 'Address A', '123-456-7890'),
('Restaurant B', 'Address B', '098-765-4321');

-- Seed reservations
INSERT INTO reservations (user_id, restaurant_id, reservation_date, number_of_guests) VALUES
(1, 1, '2024-07-01 19:00:00', 2),
(2, 2, '2024-07-02 20:00:00', 4);


INSERT INTO users (username, password, email) VALUES 
('admin', 'password123', 'admin@example.com'),
('user1', 'password123', 'user1@example.com');

INSERT INTO restaurants (name, address, phone) VALUES 
('Restaurant A', 'Address for Restaurant A', '123-456-7890'),
('Restaurant B', 'Address for Restaurant B', '098-765-4321');

INSERT INTO reservations (user_id, restaurant_id, reservation_date, number_of_guests) VALUES 
(1, 1, '2024-07-01 19:00:00', 2),
(2, 2, '2024-07-02 20:00:00', 4);

CREATE DATABASE HOUSE_RENTING
CREATE TABLE Users (
  user_id INT PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(50)
);
INSERT INTO Users (user_id, username, email, password)
VALUES
  (1, 'john123', 'john@example.com', 'password123'),
  (2, 'emma456', 'emma@example.com', 'password456'),
  (3, 'mike789', 'mike@example.com', 'password789'),
  (4, 'sarah321', 'sarah@example.com', 'password321'),
  (5, 'alex555', 'alex@example.com', 'password555'),
  (6, 'lisa888', 'lisa@example.com', 'password888'),
  (7, 'peter222', 'peter@example.com', 'password222'),
  (8, 'julia999', 'julia@example.com', 'password999'),
  (9, 'matt777', 'matt@example.com', 'password777'),
  (10, 'olivia444', 'olivia@example.com', 'password444');

  select * from users

CREATE TABLE Properties (
  property_id INT PRIMARY KEY,
  user_id INT,
  title VARCHAR(100),
  description VARCHAR(200),
  price DECIMAL(10, 2),
  location VARCHAR(100),
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
INSERT INTO Properties (property_id, user_id, title, description, price, location)
VALUES
  (1, 1, 'Beautiful Villa', 'Stunning villa with ocean view', 200.00, 'Malibu, CA'),
  (2, 2, 'Cozy Apartment', 'Modern apartment in city center', 100.00, 'New York, NY'),
  (3, 1, 'Luxury Penthouse', 'Spacious penthouse with panoramic city views', 350.00, 'Los Angeles, CA'),
  (4, 3, 'Charming Cottage', 'Quaint cottage in a peaceful countryside', 80.00, 'Cotswolds, UK'),
  (5, 4, 'Beachfront Bungalow', 'Relaxing bungalow steps away from the beach', 150.00, 'Bali, Indonesia'),
  (6, 5, 'Mountain Retreat', 'Cozy cabin nestled in the mountains', 120.00, 'Aspen, CO'),
  (7, 6, 'Urban Loft', 'Industrial loft in the heart of the city', 200.00, 'Berlin, Germany'),
  (8, 7, 'Family House', 'Spacious house perfect for a family vacation', 180.00, 'Orlando, FL'),
  (9, 8, 'Seaside Villa', 'Elegant villa with private beach access', 300.00, 'Amalfi Coast, Italy'),
  (10, 9, 'Ski Chalet', 'Charming chalet in a popular ski resort', 250.00, 'Chamonix, France');

SELECT * FROM Properties

CREATE TABLE owner (
  owner_id INT PRIMARY KEY,
  owner_name VARCHAR(50),
  contact VARCHAR (15)
);
INSERT INTO owner (owner_id, owner_name, contact)
VALUES
  (1, 'John Smith', '1234567890'),
  (2, 'Emma Johnson', '9876543210'),
  (3, 'Michael Brown', '4567890123'),
  (4, 'Sarah Davis', '7890123456'),
  (5, 'Alex Wilson', '2109876543'),
  (6, 'Emily Thompson', '5432109876'),
  (7, 'Daniel Lee', '9012345678'),
  (8, 'Olivia Anderson', '3210987654'),
  (9, 'Matthew Clark', '6789012345'),
  (10, 'Sophia Walker', '2345678901');

select * from owner

CREATE TABLE Property_Owner (
  property_id INT,
  owner_id INT,
  FOREIGN KEY (property_id) REFERENCES Properties(property_id),
  FOREIGN KEY (owner_id) REFERENCES owner(owner_id)
);
INSERT INTO Property_Owner (property_id, owner_id)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (6, 6),
  (7, 7),
  (8, 8),
  (9, 9),
  (10, 10);

select * from property_owner

CREATE TABLE Bookings (
  booking_id INT PRIMARY KEY,
  property_id INT,
  user_id INT,
  check_in_date DATE,
  check_out_date DATE,
  FOREIGN KEY (property_id) REFERENCES Properties(property_id),
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
INSERT INTO Bookings (booking_id, property_id, user_id, check_in_date, check_out_date)
VALUES
  (1, 1, 1, '2023-07-01', '2023-07-10'),
  (2, 2, 2, '2023-07-05', '2023-07-12'),
  (3, 3, 3, '2023-07-10', '2023-07-15'),
  (4, 4, 4, '2023-07-15', '2023-07-20'),
  (5, 5, 5, '2023-07-20', '2023-07-27'),
  (6, 6, 6, '2023-07-25', '2023-08-01'),
  (7, 7, 7, '2023-07-30', '2023-08-05'),
  (8, 8, 8, '2023-08-03', '2023-08-10'),
  (9, 9, 9, '2023-08-08', '2023-08-15'),
  (10, 10, 10, '2023-08-12', '2023-08-20');

select * from Bookings

CREATE TABLE Reviews (
  review_id INT PRIMARY KEY,
  property_id INT,
  user_id INT,
  rating INT,
  comment VARCHAR(200),
  FOREIGN KEY (property_id) REFERENCES Properties(property_id),
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
INSERT INTO Reviews (review_id, property_id, user_id, rating, comment)
VALUES
  (1, 1, 1, 5, 'Great experience!'),
  (2, 2, 2, 4, 'Nice location'), 
  (3, 3, 3, 4, 'Clean and comfortable'),
  (4, 4, 4, 3, 'Average stay'),
  (5, 5, 5, 5, 'Highly recommended'),
  (6, 6, 6, 4, 'Lovely cabin'),
  (7, 7, 7, 5, 'Perfect city loft'),
  (8, 8, 8, 3, 'Needs improvement'),
  (9, 9, 9, 5, 'Exquisite villa'),
  (10, 10, 10, 4, 'Great ski chalet');

select * from Bookings

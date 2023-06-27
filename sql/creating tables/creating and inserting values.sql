-- Step 1: Create the HOUSE_RENTING database
CREATE DATABASE HOUSE_RENTING;

-- Step 2: Use the HOUSE_RENTING database
USE HOUSE_RENTING;

-- Step 3: Create the Users table
CREATE TABLE Users (
  User_id INT PRIMARY KEY IDENTITY (1,1),
  FirstName VARCHAR(20),
  LastName VARCHAR(20),
  Email VARCHAR(50),
  Password VARCHAR(100)
);

-- Step 4: Insert rows into the Users table
INSERT INTO Users (FirstName, LastName, Email, Password)
VALUES
  ('John', 'Doe', 'john@example.com', '123'),
  ('Jane', 'Smith', 'jane@example.com', '232'),
  ('Michael', 'Johnson', 'michael@example.com', 'password3'),
  ('Emily', 'Davis', 'emily@example.com', 'password4'),
  ('David', 'Anderson', 'david@example.com', 'password5'),
  ('Sarah', 'Wilson', 'sarah@example.com', 'password6'),
  ('Daniel', 'Taylor', 'daniel@example.com', 'password7'),
  ('Olivia', 'Thomas', 'olivia@example.com', 'password8'),
  ('Andrew', 'Robinson', 'andrew@example.com', 'password9'),
  ('Sophia', 'Clark', 'sophia@example.com', 'password10');

 -- Step 1: Alter the Users table to modify the username column
ALTER TABLE Users
ALTER COLUMN username VARCHAR(40);

-- Step 2: Update the username column with desired values
UPDATE Users
SET username = 'user1' WHERE User_id = 1;
UPDATE Users
SET username = 'user2' WHERE User_id = 2;
UPDATE Users
SET username = 'user3' WHERE User_id = 3;
UPDATE Users
SET username = 'user4' WHERE User_id = 4;
UPDATE Users
SET username = 'user5' WHERE User_id = 5;
UPDATE Users
SET username = 'user6' WHERE User_id = 6;
UPDATE Users
SET username = 'user7' WHERE User_id = 7;
UPDATE Users
SET username = 'user8' WHERE User_id = 8;
UPDATE Users
SET username = 'user9' WHERE User_id = 9;
UPDATE Users
SET username = 'user10' WHERE User_id = 10;
UPDATE Users
SET username = 'Ababu' WHERE User_id = 11;
-- Repeat the above UPDATE statements for the remaining rows, specifying the desired usernames

-- Step 3: Verify the updated Users table
SELECT * FROM Users;




-- Step 5: Create the Properties table
CREATE TABLE Properties (
  property_id INT PRIMARY KEY IDENTITY(1,1),
  user_id INT,
  title VARCHAR(100),
  description VARCHAR(200),
  price DECIMAL(10, 2),
  location VARCHAR(100),
  FOREIGN KEY (user_id) REFERENCES Users(User_id) ON DELETE CASCADE
);

-- Step 6: Insert rows into the Properties table
INSERT INTO Properties (user_id, title, description, price, location)
VALUES
  (1, 'Cozy Apartment', 'A comfortable apartment in the heart of the city.', 1500.00, 'City Center'),
  (2, 'Spacious Villa', 'A luxurious villa with a private pool and garden.', 5000.00, 'Suburb'),
  (3, 'Charming Cottage', 'A quaint cottage surrounded by nature.', 800.00, 'Countryside'),
  (4, 'Modern Loft', 'A stylish loft with panoramic city views.', 2000.00, 'Downtown'),
  (5, 'Beachfront House', 'A beautiful house right on the beach.', 3000.00, 'Beachfront'),
  (6, 'Mountain Retreat', 'A peaceful retreat nestled in the mountains.', 1200.00, 'Mountains'),
  (7, 'Lake House', 'A cozy house overlooking a serene lake.', 1800.00, 'Lakeside'),
  (8, 'Luxury Penthouse', 'A lavish penthouse with all the amenities.', 4000.00, 'City Center'),
  (9, 'Rustic Cabin', 'A charming cabin with a rustic feel.', 1000.00, 'Forest'),
  (10, 'Seaside Bungalow', 'A cozy bungalow just steps away from the beach.', 2500.00, 'Seaside');

-- Step 7: Create the owner table
CREATE TABLE owner (
  owner_id INT PRIMARY KEY IDENTITY(1,1),
  owner_name VARCHAR(50),
  contact VARCHAR(15)
);

-- Step 8: Insert rows into the owner table
INSERT INTO owner (owner_name, contact)
VALUES
  ('John Doe', '0701234567'),
  ('Jane Smith', '0702345678'),
  ('Michael Johnson', '0703456789'),
  ('Emily Davis', '0704567890'),
  ('David Anderson', '0705678901'),
  ('Sarah Wilson', '0706789012'),
  ('Daniel Taylor', '0707890123'),
  ('Olivia Thomas', '0708901234'),
  ('Andrew Robinson', '0709012345'),
  ('Sophia Clark', '0700123456');

-- Step 9: Create the Property_Owner table
CREATE TABLE Property_Owner (
  property_id INT,
  owner_id INT,
  FOREIGN KEY (property_id) REFERENCES Properties(property_id) ON DELETE CASCADE,
  FOREIGN KEY (owner_id) REFERENCES owner(owner_id) ON DELETE CASCADE
);

-- Step 10: Insert rows into the Property_Owner table
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

-- Step 11: Create the Bookings table
CREATE TABLE Bookings (
  booking_id INT PRIMARY KEY IDENTITY(1,1),
  property_id INT,
  user_id INT,
  check_in_date DATE,
  check_out_date DATE,
  FOREIGN KEY (property_id) REFERENCES Properties(property_id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES Users(User_id) 
);

-- Step 12: Insert rows into the Bookings table
INSERT INTO Bookings (property_id, user_id, check_in_date, check_out_date)
VALUES
  (1, 2, '2023-06-24', '2023-06-30'),
  (2, 3, '2023-07-01', '2023-07-07'),
  (3, 4, '2023-07-08', '2023-07-14'),
  (4, 5, '2023-07-15', '2023-07-21'),
  (5, 6, '2023-07-22', '2023-07-28'),
  (6, 7, '2023-07-29', '2023-08-04'),
  (7, 8, '2023-08-05', '2023-08-11'),
  (8, 9, '2023-08-12', '2023-08-18'),
  (9, 10, '2023-08-19', '2023-08-25'),
  (10, 1, '2023-08-26', '2023-09-01');

-- Step 13: Create the Reviews table
CREATE TABLE Reviews (
  review_id INT PRIMARY KEY IDENTITY(1,1),
  property_id INT,
  user_id INT,
  rating INT,
  comment VARCHAR(200),
  FOREIGN KEY (property_id) REFERENCES Properties(property_id),
  FOREIGN KEY (user_id) REFERENCES Users(User_id) ON DELETE CASCADE
);

-- Step 14: Insert rows into the Reviews table
INSERT INTO Reviews (property_id, user_id, rating, comment)
VALUES
  (1, 3, 4, 'The apartment was clean and cozy.'),
  (2, 4, 5, 'The villa exceeded our expectations.'),
  (3, 5, 3, 'The cottage had a beautiful surrounding area.'),
  (4, 6, 4, 'The loft had amazing city views.'),
  (5, 7, 5, 'The beachfront house was breathtaking.'),
  (6, 8, 4, 'The mountain retreat provided a peaceful getaway.'),
  (7, 9, 4, 'The lake house was a perfect relaxing spot.'),
  (8, 10, 5, 'The penthouse was luxurious and well-equipped.'),
  (9, 1, 3, 'The rustic cabin had a charming atmosphere.'),
  (10, 2, 4, 'The bungalow was just steps away from the beach.');

-- Step 15: Check the created tables and their contents
SELECT * FROM Users;
SELECT * FROM Properties;
SELECT * FROM owner;
SELECT * FROM Property_Owner;
SELECT * FROM Bookings;
SELECT * FROM Reviews;

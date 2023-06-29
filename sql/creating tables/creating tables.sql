-- Create the HOUSE_RENTING database (if it doesn't exist)
CREATE DATABASE HOUSE_RENTING;
USE HOUSE_RENTING;

-- Create the Users table
CREATE TABLE Users (
  User_id INT PRIMARY KEY IDENTITY(1,1),
  FirstName VARCHAR(20),
  LastName VARCHAR(20),
  Email VARCHAR(50),
  Password VARCHAR(100),
  username VARCHAR(50) UNIQUE
);

-- Insert rows into the Users table
INSERT INTO Users (FirstName, LastName, Email, Password, username)
VALUES
  ('John', 'Doe', 'john@example.com', '123', 'john_doe'),
  ('Jane', 'Smith', 'jane@example.com', '232', 'jane_smith'),
  ('Michael', 'Johnson', 'michael@example.com', 'password3', 'michael_johnson'),
  ('Emily', 'Davis', 'emily@example.com', 'password4', 'emily_davis'),
  ('David', 'Anderson', 'david@example.com', 'password5', 'david_anderson'),
  ('Sarah', 'Wilson', 'sarah@example.com', 'password6', 'sarah_wilson'),
  ('Daniel', 'Taylor', 'daniel@example.com', 'password7', 'daniel_taylor'),
  ('Olivia', 'Thomas', 'olivia@example.com', 'password8', 'olivia_thomas'),
  ('Andrew', 'Robinson', 'andrew@example.com', 'password9', 'andrew_robinson'),
  ('Sophia', 'Clark', 'sophia@example.com', 'password10', 'sophia_clark');

  select * from Users

-- Create the Properties table
CREATE TABLE Properties (
  property_id INT PRIMARY KEY IDENTITY(1,1),
  user_id INT,
  title VARCHAR(100),
  description VARCHAR(200),
  price DECIMAL(10, 2),
  location VARCHAR(100),
  FOREIGN KEY (user_id) REFERENCES Users(User_id) ON DELETE CASCADE
);

-- Insert rows into the Properties table
INSERT INTO Properties (user_id, title, description, price, location)
VALUES
  (1, 'Luxury Villa A', 'A luxurious villa with breathtaking views', 2000.00, 'Location 1'),
  (2, 'Cozy Apartment B', 'A cozy apartment in the heart of the city', 800.00, 'Location 2'),
  (3, 'Seaside Villa C', 'A beautiful villa by the beach', 2500.00, 'Location 3'),
  (4, 'City Apartment D', 'A modern apartment with city views', 1200.00, 'Location 4'),
  (5, 'Mountain Villa E', 'A charming villa in the mountains', 1800.00, 'Location 5'),
  (6, 'Downtown Apartment F', 'An elegant apartment in downtown area', 1000.00, 'Location 6'),
  (7, 'Garden Villa G', 'A villa with a spacious garden', 2200.00, 'Location 7'),
  (8, 'Lakefront Apartment H', 'An apartment with stunning lake views', 1500.00, 'Location 8'),
  (9, 'Private Villa I', 'A private villa for a peaceful retreat', 2800.00, 'Location 9'),
  (10, 'Modern Apartment J', 'A modern apartment with all amenities', 1100.00, 'Location 10');

  select * from Properties


-- Create the owner table
CREATE TABLE owner (
  owner_id INT PRIMARY KEY IDENTITY(1,1),
  owner_name VARCHAR(50),
  contact VARCHAR(15)
);

-- Insert rows into the owner table
INSERT INTO owner (owner_name, contact)
VALUES
  ('John Smith', '+1234567890'),
  ('Jane Doe', '+9876543210'),
  ('Michael Johnson', '+1112223333'),
  ('Emily Davis', '+4445556666'),
  ('David Anderson', '+7778889999'),
  ('Sarah Wilson', '+1231231231'),
  ('Daniel Taylor', '+4564564564'),
  ('Olivia Thomas', '+7897897897'),
  ('Andrew Robinson', '+3213213213'),
  ('Sophia Clark', '+6546546546');


  select * from owner

-- Create the Property_Owner table
CREATE TABLE Property_Owner (
  property_id INT,
  owner_id INT,
  FOREIGN KEY (property_id) REFERENCES Properties(property_id) ON DELETE CASCADE,
  FOREIGN KEY (owner_id) REFERENCES owner(owner_id) ON DELETE CASCADE
);

-- Insert rows into the Property_Owner table
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

-- Create the Reviews table
CREATE TABLE Reviews (
  review_id INT PRIMARY KEY IDENTITY(1,1),
  property_id INT,
  user_id INT,
  rating INT,
  comment VARCHAR(200),
  FOREIGN KEY (property_id) REFERENCES Properties(property_id),
  FOREIGN KEY (user_id) REFERENCES Users(User_id) ON DELETE CASCADE
);

-- Insert rows into the Reviews table
INSERT INTO Reviews (property_id, user_id, rating, comment)
VALUES
  (1, 1, 5, 'Excellent property with great amenities'),
  (2, 2, 4, 'Cozy apartment in a convenient location'),
  (3, 3, 5, 'Breathtaking views from the seaside villa'),
  (4, 4, 3, 'Decent apartment but could use some improvements'),
  (5, 5, 5, 'Amazing mountain villa with a peaceful ambiance'),
  (6, 6, 4, 'Well-maintained apartment in the heart of downtown'),
  (7, 7, 5, 'Beautiful villa with a lovely garden'),
  (8, 8, 4, 'Nice apartment with stunning lake views'),
  (9, 9, 5, 'Private villa with excellent amenities'),
  (10, 10, 3, 'Modern apartment with some maintenance issues');

  select * from Reviews
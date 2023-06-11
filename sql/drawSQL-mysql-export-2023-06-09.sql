CREATE TABLE `Owner`(
    `Owner_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Owner_name` VARCHAR(255) NOT NULL,
    `contact` VARCHAR(255) NOT NULL
);
CREATE TABLE `Users`(
    `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);
CREATE TABLE `Review`(
    `review_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `property_id` INT NOT NULL,
    `user_id` INT NOT NULL,
    `rating` INT NOT NULL,
    `comment` BIGINT NOT NULL
);
ALTER TABLE
    `Review` ADD UNIQUE `review_property_id_unique`(`property_id`);
ALTER TABLE
    `Review` ADD UNIQUE `review_user_id_unique`(`user_id`);
CREATE TABLE `Properties`(
    `property_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `Price` DECIMAL(8, 2) NOT NULL,
    `location` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `Properties` ADD UNIQUE `properties_user_id_unique`(`user_id`);
CREATE TABLE `property-owner`(
    `property_id` INT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE KEY,
    `owner-id` INT NOT NULL
);
ALTER TABLE
    `property-owner` ADD UNIQUE `property_owner_owner_id_unique`(`owner-id`);
CREATE TABLE `Booking`(
    `booking_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `property_id` INT NOT NULL,
    `user_id` INT NOT NULL,
    `check_in_date` DATE NOT NULL,
    `check_out_date` DATE NOT NULL
);
ALTER TABLE
    `Booking` ADD UNIQUE `booking_property_id_unique`(`property_id`);
ALTER TABLE
    `Booking` ADD UNIQUE `booking_user_id_unique`(`user_id`);
ALTER TABLE
    `Booking` ADD CONSTRAINT `booking_property_id_foreign` FOREIGN KEY(`property_id`) REFERENCES `Properties`(`property_id`);
ALTER TABLE
    `Review` ADD CONSTRAINT `review_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `Users`(`user_id`);
ALTER TABLE
    `Review` ADD CONSTRAINT `review_property_id_foreign` FOREIGN KEY(`property_id`) REFERENCES `Properties`(`property_id`);
ALTER TABLE
    `property-owner` ADD CONSTRAINT `property_owner_owner_id_foreign` FOREIGN KEY(`owner-id`) REFERENCES `Owner`(`Owner_id`);
ALTER TABLE
    `property-owner` ADD CONSTRAINT `property_owner_property_id_foreign` FOREIGN KEY(`property_id`) REFERENCES `Properties`(`property_id`);
ALTER TABLE
    `Booking` ADD CONSTRAINT `booking_booking_id_foreign` FOREIGN KEY(`booking_id`) REFERENCES `Users`(`user_id`);
ALTER TABLE
    `Properties` ADD CONSTRAINT `properties_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `Users`(`user_id`);
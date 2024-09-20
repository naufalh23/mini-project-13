-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('Customer', 'Event_Organizer', 'Admin') NOT NULL DEFAULT 'Customer';

-- AlterTable
ALTER TABLE `Event` ADD COLUMN `rating` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `avatar` VARCHAR(191) NULL,
    MODIFY `role` ENUM('Customer', 'EventOrganizer') NOT NULL DEFAULT 'Customer';

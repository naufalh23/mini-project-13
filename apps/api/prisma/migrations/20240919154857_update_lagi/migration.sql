-- AlterTable
ALTER TABLE `Event` MODIFY `capacity` INTEGER NOT NULL DEFAULT 1,
    MODIFY `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `price` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `discount` DOUBLE NOT NULL DEFAULT 0;

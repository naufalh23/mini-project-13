/*
  Warnings:

  - You are about to alter the column `eventtype` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - Added the required column `discount` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Event` ADD COLUMN `discount` DOUBLE NOT NULL,
    MODIFY `eventtype` ENUM('Free', 'Paid') NOT NULL;

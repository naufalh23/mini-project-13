/*
  Warnings:

  - You are about to alter the column `rating` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Event` MODIFY `rating` DOUBLE NOT NULL DEFAULT 0;

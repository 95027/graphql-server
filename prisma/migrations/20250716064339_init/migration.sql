/*
  Warnings:

  - Added the required column `createdAt` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `createdAt` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` INTEGER NULL,
    ADD COLUMN `updatedAt` VARCHAR(191) NOT NULL;

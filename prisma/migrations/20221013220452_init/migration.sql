-- CreateTable
CREATE TABLE `studentys` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `date_birth` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `series` VARCHAR(191) NOT NULL,
    `shift` VARCHAR(191) NOT NULL,
    `responsible_name` VARCHAR(191) NOT NULL,
    `responsible_email` VARCHAR(191) NOT NULL,
    `responsible_phone` VARCHAR(191) NOT NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `studentys_email_key`(`email`),
    UNIQUE INDEX `studentys_cpf_key`(`cpf`),
    UNIQUE INDEX `studentys_responsible_email_key`(`responsible_email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

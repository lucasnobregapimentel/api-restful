/*
  Warnings:

  - Added the required column `author` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "author" TEXT NOT NULL;

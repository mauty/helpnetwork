/*
  Warnings:

  - You are about to drop the column `category` on the `Resource` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Resource" DROP COLUMN "category",
ADD COLUMN     "category_id" INTEGER NOT NULL DEFAULT 1;

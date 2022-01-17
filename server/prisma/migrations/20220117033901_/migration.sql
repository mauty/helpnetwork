/*
  Warnings:

  - You are about to drop the column `category` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Resource` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[category_id]` on the table `Request` will be added. If there are existing duplicate values, this will fail.
  - Made the column `first_name` on table `Person` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_name` on table `Person` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `category_id` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_helper_id_fkey";

-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "lat" DOUBLE PRECISION,
ADD COLUMN     "long" DOUBLE PRECISION,
ADD COLUMN     "postal_code" TEXT,
ALTER COLUMN "first_name" SET NOT NULL,
ALTER COLUMN "last_name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Request" DROP COLUMN "category",
ADD COLUMN     "category_id" INTEGER NOT NULL,
ADD COLUMN     "lat" DOUBLE PRECISION,
ADD COLUMN     "long" DOUBLE PRECISION,
ADD COLUMN     "postal_code" TEXT,
ALTER COLUMN "map_id" DROP NOT NULL,
ALTER COLUMN "helper_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Resource" DROP COLUMN "category";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "request_id" INTEGER NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Request_category_id_key" ON "Request"("category_id");

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_helper_id_fkey" FOREIGN KEY ("helper_id") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

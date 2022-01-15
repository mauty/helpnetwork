/*
  Warnings:

  - You are about to drop the column `resource_id` on the `Request` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_resource_id_fkey";

-- AlterTable
ALTER TABLE "Request" DROP COLUMN "resource_id";

-- CreateTable
CREATE TABLE "Requested_resource" (
    "id" SERIAL NOT NULL,
    "request_id" INTEGER NOT NULL,
    "resource_id" INTEGER NOT NULL,

    CONSTRAINT "Requested_resource_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Requested_resource" ADD CONSTRAINT "Requested_resource_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "Request"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Requested_resource" ADD CONSTRAINT "Requested_resource_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

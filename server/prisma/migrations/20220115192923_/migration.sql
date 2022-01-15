/*
  Warnings:

  - You are about to drop the column `receiver_id` on the `Conversation` table. All the data in the column will be lost.
  - You are about to drop the column `sender_id` on the `Conversation` table. All the data in the column will be lost.
  - Added the required column `helper_id` to the `Conversation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requester_id` to the `Conversation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Conversation" DROP CONSTRAINT "Conversation_receiver_id_fkey";

-- DropForeignKey
ALTER TABLE "Conversation" DROP CONSTRAINT "Conversation_sender_id_fkey";

-- AlterTable
ALTER TABLE "Conversation" DROP COLUMN "receiver_id",
DROP COLUMN "sender_id",
ADD COLUMN     "helper_id" INTEGER NOT NULL,
ADD COLUMN     "requester_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_helper_id_fkey" FOREIGN KEY ("helper_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_requester_id_fkey" FOREIGN KEY ("requester_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

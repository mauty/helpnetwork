-- DropForeignKey
ALTER TABLE "Conversation" DROP CONSTRAINT "Conversation_request_id_fkey";

-- AlterTable
ALTER TABLE "Conversation" ALTER COLUMN "request_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Request" ALTER COLUMN "start_time" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "Request"("id") ON DELETE SET NULL ON UPDATE CASCADE;

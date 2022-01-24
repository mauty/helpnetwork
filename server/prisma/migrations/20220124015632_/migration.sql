-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "sender_id" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

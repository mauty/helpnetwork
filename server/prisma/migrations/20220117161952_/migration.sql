-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_helper_id_fkey";

-- AlterTable
ALTER TABLE "Request" ALTER COLUMN "helper_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_helper_id_fkey" FOREIGN KEY ("helper_id") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

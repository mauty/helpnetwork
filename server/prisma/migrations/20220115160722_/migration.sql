-- AlterTable
ALTER TABLE "Request" ALTER COLUMN "points_value" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Resource" ALTER COLUMN "detail" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;

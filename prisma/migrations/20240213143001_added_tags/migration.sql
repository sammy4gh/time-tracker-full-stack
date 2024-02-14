-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('PROJECT', 'LEAVE', 'HOLIDAY');

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "tags" "Tag"[];

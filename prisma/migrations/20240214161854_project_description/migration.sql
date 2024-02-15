/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "description" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");

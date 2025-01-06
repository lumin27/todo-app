-- CreateTable
CREATE TABLE "Todo" (
    "_id" TEXT NOT NULL,
    "title" TEXT,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("_id")
);

import { PrismaClient } from "@prisma/client";
export const db = new PrismaClient();

process.on("beforeExit", () => {
    db.$disconnect();
});

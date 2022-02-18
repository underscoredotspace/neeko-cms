import { prisma as db } from "./db";

(async () => {
    // await db.role.create({ data: { id: "1234", name: "new type" } });
    await db.role.deleteMany();
    const permissionTypes = await db.role.findMany();
    console.dir({ permissionTypes });
})();

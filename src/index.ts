import db from "./db";

(async () => {
    // await db.permissionType.create({ data: { name: "new type" } });
    const permissionTypes = await db.permissionType.findMany();
    console.dir({ permissionTypes });
})();

-- CreateTable
CREATE TABLE "PermissionType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "permissionId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    CONSTRAINT "Permission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "PermissionType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Permission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PermissionType_name_key" ON "PermissionType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Role_id_key" ON "Role"("id");

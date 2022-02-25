import { Collection } from "db/types";
import { createValidator } from "./helpers";

type PermissionTypeCollection = Collection<{ name: string }>;

const schema: PermissionTypeCollection["schema"] = {
    type: "object",
    properties: {
        name: { type: "string", minLength: 1 },
    },
    required: ["name"],
};

export const PermissionType: PermissionTypeCollection = {
    schema,
};

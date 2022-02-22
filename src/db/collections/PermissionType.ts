import { Collection } from "db/types";
import { createValidator } from "../helpers";

type PermissionTypeCollection = Collection<{ id: string; name: string }>;

const schema: PermissionTypeCollection["schema"] = {
    type: "object",
    properties: {
        id: { type: "string", pattern: `^[0-9]{13,}` },
        name: { type: "string", minLength: 1 },
    },
    required: ["name"],
    additionalProperties: false,
};

export const PermissionType: PermissionTypeCollection = {
    schema,
    validator: createValidator(schema),
};

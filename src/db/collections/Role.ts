import { Collection } from "db/types";
import { validate } from "../helpers";

type RoleCollection = Collection<{ id: string; name: string }>;

const schema: RoleCollection["schema"] = {
    type: "object",
    properties: {
        id: { type: "string", pattern: "^[0-9]{13,}$" },
        name: { type: "string", minLength: 1 },
    },
    required: ["id", "name"],
    additionalProperties: false,
};
const validator = validate(schema);

export const Role: RoleCollection = {
    schema,
    validator,
};

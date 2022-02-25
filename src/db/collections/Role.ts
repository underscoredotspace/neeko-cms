import { Collection } from "db/types";

export const Role: Collection<{ id: string; name: string }> = {
    schema: {
        type: "object",
        properties: {
            id: { type: "string", pattern: "^[0-9]{13,}$" },
            name: { type: "string", minLength: 1 },
        },
        required: ["id", "name"],
    },
};

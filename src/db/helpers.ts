import Ajv from "ajv";
import { Validator } from "./types";
const ajv = new Ajv({ verbose: true, allErrors: true });

export const validate =
    <T>(schema: T) =>
    (record: Record<string, unknown>): Validator => {
        const validate = ajv.compile(schema);
        const valid = validate(record);
        if (valid) {
            return [];
        }

        return validate.errors ?? [{ message: "something went wrong" }];
    };

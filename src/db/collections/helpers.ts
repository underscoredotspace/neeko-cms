import Ajv from "ajv";
import ajvFormats from "ajv-formats";
import { UnknownRecord, Validator } from "../types";
const ajv = new Ajv({ verbose: true, allErrors: true });
ajvFormats(ajv, ["uuid", "regex"]);

export const createValidator =
    <T>(schema: T) =>
    (record: UnknownRecord): Validator => {
        const validate = ajv.compile(schema);
        const valid = validate(record);
        if (valid) {
            return [];
        }

        return validate.errors ?? [{ message: "something went wrong" }];
    };

type ValidatorFn = (record: UnknownRecord) => Validator;
type InserterFn = (record: UnknownRecord) => Promise<Array<UnknownRecord>>;

export const createInserter =
    (validator: ValidatorFn, inserter: InserterFn) =>
    async (record: UnknownRecord): Promise<Array<UnknownRecord>> => {
        const errors = validator(record);
        if (errors?.length === 0) {
            return await inserter(record);
        }

        throw errors;
    };

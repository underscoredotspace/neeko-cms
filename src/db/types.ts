import { ErrorObject, JSONSchemaType } from "ajv";

export type UnknownRecord = Record<string, unknown>;
export type Validator = Partial<ErrorObject>[] | undefined;

export interface Collection<S> {
    schema: JSONSchemaType<S>;
    // description: Partial<Record<keyof S, string>>;
}

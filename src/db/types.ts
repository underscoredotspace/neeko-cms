import { ErrorObject, JSONSchemaType } from "ajv";

export type Validator = Partial<ErrorObject>[] | undefined;

export interface Collection<T> {
    schema: JSONSchemaType<T>;
    validator: (newRecord: Record<string, unknown>) => Validator;
}

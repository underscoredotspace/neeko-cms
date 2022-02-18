import { Role } from "./Role";

describe("Role Collection Validator", () => {
    test("Should return empty array when valid", () => {
        const result = Role.validator({
            id: "1234567890123",
            name: "something",
        });
        expect(result).toEqual([]);
    });

    test("Should return errors", () => {
        const result = Role.validator({
            id: "1234567890123",
        });
        expect(result).toHaveLength(1);
        expect(result && result[0].message).toEqual(
            "must have required property 'name'",
        );
    });
});

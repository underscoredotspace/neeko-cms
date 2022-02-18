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
            name: 123,
        });
        expect(result).toEqual([]);
    });
});

import { describe, it, expect } from "vitest";
describe("something truthy and falsy", () => {
it(" Returns True", () => {
expect(true).toBe(true);
});
it("Returns False", () => {
expect(false).toBe(false);
});
});

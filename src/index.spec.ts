import { foo } from "./index";

it("test foo", () => {
  expect(foo("test")).toBe("foo:test");
});

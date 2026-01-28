import { validateEmail } from "@/utils/validateEmail";

describe("Validate Email:", () => {
  const cases: any[] = [
    ["abc@gmail.com", true],
    ["abc@", false],
    ["@gmail.com", false],
    [{ email: "abc@gmail.com" }, false]
  ];

  it("", () => {});
  it.each(cases)("%p => %p", (email, expected) => {
    expect(validateEmail(email)).toBe(expected);
  });
});

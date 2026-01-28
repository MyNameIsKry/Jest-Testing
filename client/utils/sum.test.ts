import { sum } from "@/utils/sum";

describe("Sum Function:", () => {
  it("Should return the sum of two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

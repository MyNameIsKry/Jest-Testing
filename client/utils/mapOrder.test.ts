import { mapOrder } from "@/utils/mapOrder";

describe("MapOrder Function:", () => {
  it("Should return [] if originalArray is null", () => {
    expect(mapOrder(null as any, [1, 2, 3], "id")).toEqual([]);
  });

  it("Should return [] if orderArray is null", () => {
    expect(mapOrder([], null as any, "id")).toEqual([]);
  });

  it("Should return [] if key is null", () => {
    expect(mapOrder([], [], null as any)).toEqual([]);
  });

  it("Should sort array by given order", () => {
    const originalArray = [
      { id: 1, name: "A" },
      { id: 3, name: "C" },
      { id: 2, name: "B" }
    ];
    const orderArray = [1, 2, 3];
    const result = mapOrder(originalArray, orderArray, "id");
    expect(result.map((item) => item.id)).toEqual([1, 2, 3]);
  });

  it("Should push items not in orderArray to the end", () => {
    const originalArray = [
      { id: 1, name: "A" },
      { id: 4, name: "D" },
      { id: 3, name: "C" },
      { id: 2, name: "B" }
    ];
    const orderArray = [1, 2, 3];
    const result = mapOrder(originalArray, orderArray, "id");
    expect(result.map((item) => item.id)).toEqual([1, 2, 3, 4]);
  });

  it("Should handle when all items are not in orderArray", () => {
    const originalArray = [
      { id: 1, name: "A" },
      { id: 3, name: "C" },
      { id: 2, name: "B" }
    ];
    const orderArray: number[] = [];
    const result = mapOrder(originalArray, orderArray, "id");
    expect(result.map((item) => item.id)).toEqual([1, 3, 2]);
  });
});

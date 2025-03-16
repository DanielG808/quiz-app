import { cn } from "./cn";

describe("cn function", () => {
  test("should combine multiple class names", () => {
    expect(cn("bg-red-500", "text-white")).toBe("bg-red-500 text-white");
  });

  test("removes duplicate classes", () => {
    expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
  });

  test("handles conditional class names", () => {
    expect(cn("p-4", false && "hidden", undefined, "m-2")).toBe("p-4 m-2");
  });

  test("handles empty input", () => {
    expect(cn()).toBe("");
  });

  test("handles truthy and falsy values", () => {
    expect(cn("p-4", 0, null, "m-2", true && "block")).toBe("p-4 m-2 block");
  });
});

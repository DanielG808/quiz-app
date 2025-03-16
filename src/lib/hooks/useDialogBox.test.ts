import { renderHook } from "@testing-library/react";
import useDialogBox from "./useDialogBox";

describe("useDialogBox Hook", () => {
  test("should initialize with isDialogOpen as false", () => {
    const { result } = renderHook(useDialogBox);
    expect(result.current.isDialogOpen).toBe(false);
  });
});

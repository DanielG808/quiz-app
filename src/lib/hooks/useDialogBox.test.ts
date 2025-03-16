import { act, renderHook } from "@testing-library/react";
import useDialogBox from "./useDialogBox";

describe("useDialogBox Hook", () => {
  test("should initialize with isDialogOpen as false", () => {
    const { result } = renderHook(useDialogBox);
    expect(result.current.isDialogOpen).toBe(false);
  });

  test("should open dialog when openDialog is called", () => {
    const { result } = renderHook(useDialogBox);

    act(() => {
      result.current.openDialog();
    });

    expect(result.current.isDialogOpen).toBe(true);
  });

  test("should close dialog when closeDialog is called", () => {});
});

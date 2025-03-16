import { act, renderHook } from "@testing-library/react";
import useOnClickOutside from "./useOnClickOutside";

describe("useOnClickOutside Hook", () => {
  let handler: jest.Mock;
  let ref: React.RefObject<HTMLElement | null>;

  beforeEach(() => {
    handler = jest.fn();
    ref = { current: null };
  });

  test("should call the handler when clicking outside the ref element", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    ref.current = div;

    renderHook(() => useOnClickOutside(ref, handler));

    act(() => {
      const outsideEvent = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        clientX: 0,
        clientY: 0,
      });
      document.body.dispatchEvent(outsideEvent);
    });

    expect(handler).toHaveBeenCalledTimes(1);

    document.body.removeChild(div);
  });
});

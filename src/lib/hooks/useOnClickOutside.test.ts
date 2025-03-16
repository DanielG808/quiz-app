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

  test("should not call the handler when clicking inside the ref element", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    ref.current = div;

    renderHook(() => useOnClickOutside(ref, handler));

    act(() => {
      const insideEvent = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        clientX: 10,
        clientY: 10,
      });
      div.dispatchEvent(insideEvent);
    });

    expect(handler).not.toHaveBeenCalled();

    document.body.removeChild(div);
  });

  test("should handle multiple outside clicks", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    ref.current = div;

    renderHook(() => useOnClickOutside(ref, handler));

    act(() => {
      const outsideEvent1 = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        clientX: 0,
        clientY: 0,
      });
      document.body.dispatchEvent(outsideEvent1);

      const outsideEvent2 = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        clientX: 0,
        clientY: 100,
      });
      document.body.dispatchEvent(outsideEvent2);
    });

    expect(handler).toHaveBeenCalledTimes(2);

    document.body.removeChild(div);
  });

  test("should call the handler when clicking outside the ref element", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    ref.current = div;

    const { unmount } = renderHook(() => useOnClickOutside(ref, handler));

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

    unmount();

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

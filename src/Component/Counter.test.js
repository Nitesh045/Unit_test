import { act, fireEvent, getByTestId, render } from "@testing-library/react";
import { Counter } from "./Counter"; // Import Counter component

describe("Counter", () => {
  test("counter showing correct count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("countId").textContent);
    console.log(countValue);
    expect(countValue).toEqual(0);
  });


  test("count should update ", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const plusButton = getByRole("button", { name: "Plus" });
    
    act(() => {
      fireEvent.click(plusButton);
    });
    const countValue = Number(getByTestId("countId").textContent);
    console.log(countValue);
    expect(countValue).toEqual(1);
  });


  test("count should update ", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const minusButton = getByRole("button", { name: "Minus" });
    
    act(() => {
      fireEvent.click(minusButton);
    });
    const countValue = Number(getByTestId("countId").textContent);
    console.log(countValue);
    expect(countValue).toEqual(-1);
  });

  test("count should update ", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const resetButton = getByRole("button", { name: "Reset" });
    
    act(() => {
      fireEvent.click(resetButton);
    });
    const countValue = Number(getByTestId("countId").textContent);
    console.log(countValue);
    expect(countValue).toEqual(0);
  });
});

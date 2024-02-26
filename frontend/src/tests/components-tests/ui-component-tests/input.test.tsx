import { createRef } from "react";
import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, fireEvent } from "@testing-library/react";

import { Input } from "@/components/ui/input";

describe("<Input />", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const result = render(<Input />);
    const input = result.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("accepts input value", () => {
    const result = render(<Input />);
    const input = result.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Acme Groceries" } });
    expect(input.value).toBe("Acme Groceries");
  });

  it("supports email input type", () => {
    const result = render(<Input type="email" />);
    const input = result.getByRole("textbox");
    expect(input).toHaveAttribute("type", "email");
  });

  it("forwards ref to the underlying input tag", () => {
    const inputRef = createRef<HTMLInputElement>();
    render(<Input ref={inputRef} />);
    expect(inputRef.current).toBeInstanceOf(HTMLInputElement);
  });

  it("passes additional props to the input element", () => {
    const result = render(<Input data-testid="acme-input" />);
    const input = result.getByTestId("acme-input");
    expect(input).toBeInTheDocument();
  });

  it("handles disabled state", () => {
    const result = render(<Input disabled />);
    const input = result.getByRole("textbox");
    expect(input).toBeDisabled();
  })
});

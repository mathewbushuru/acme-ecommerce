import { describe, it, expect, afterEach, vi } from "vitest";
import { render, cleanup, fireEvent } from "@testing-library/react";

import { Button } from "@/components/ui/button";

describe("<Button />", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const result = render(<Button>Acme Corp</Button>);
    expect(result.getByRole("button")).toBeInTheDocument();
  });

  it("applies default variant and size classes", () => {
    const result = render(<Button />);
    const button = result.getByRole("button");
    expect(button).toHaveClass("bg-primary");
    expect(button).toHaveClass("h-10");
  });

  it("applies different variant and size classes", () => {
    const result = render(
      <Button variant="destructive" size="sm">
        Acme
      </Button>,
    );
    const button = result.getByRole("button");
    expect(button).toHaveClass("bg-destructive");
    expect(button).toHaveClass("h-9");
  });

  it("handles click events", () => {
    const handleClickMock = vi.fn();
    const result = render(<Button onClick={handleClickMock}>Acme</Button>);
    const button = result.getByRole("button");
    fireEvent.click(button);
    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });

  it("is disabled when the disabled prop is set", () => {
    const result = render(<Button disabled>Acme</Button>);
    const button = result.getByRole("button");
    expect(button).toBeDisabled();
  })
});

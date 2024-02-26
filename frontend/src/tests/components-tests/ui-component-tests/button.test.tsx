import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { Button } from "@/components/ui/button";

describe("<Button />", () => {
  it("renders without crashing", () => {
    const result = render(<Button>Acme Corp</Button>);
    expect(result.getByRole("button")).toBeInTheDocument();
  });
});

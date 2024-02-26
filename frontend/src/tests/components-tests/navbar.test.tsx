import { expect, describe, it, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";

import Navbar from "@/components/navbar";

describe("<Navbar />", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const result = render(<Navbar />);
    const title = result.getByText(/acme/i);
    expect(title).toBeInTheDocument();
  });
});

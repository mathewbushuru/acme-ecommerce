import { expect, describe, it, afterEach, beforeEach, vi } from "vitest";
import { cleanup, render } from "@testing-library/react";

import Navbar from "@/components/navbar";

vi.mock("react-router-dom");
vi.mock("@/store/store")

describe("<Navbar />", async () => {
  const rrd = await import("react-router-dom");

  beforeEach( () => {
    rrd.useNavigate = vi.fn();
  })

  afterEach(cleanup);

  it("renders without crashing", () => {
    const result = render(<Navbar />);
    const title = result.getByText(/acme/i);
    expect(title).toBeInTheDocument();
  });
});

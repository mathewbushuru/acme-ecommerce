import { expect, describe, it, afterEach, beforeEach, vi } from "vitest";
import { cleanup, render } from "@testing-library/react";

import Navbar from "@/components/navbar";

vi.mock("react-router-dom");
vi.mock("@/store/store");
vi.mock("@/api", async (importOriginal) => {
  const mod: any = await importOriginal();
  return {
    ...mod,
    useGetAllProductCategoriesQuery: vi.fn().mockReturnValue([]),
  };
});

describe("<Navbar />", async () => {
  const rrd = await import("react-router-dom");

  beforeEach(() => {
    rrd.useNavigate = vi.fn();
  });

  afterEach(cleanup);

  it("renders without crashing", () => {
    const result = render(<Navbar />);
    const title = result.getByText(/acme/i);
    expect(title).toBeInTheDocument();
  });
});

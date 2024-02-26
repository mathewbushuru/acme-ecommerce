import { describe, it, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";

import DealsCarousel from "@/components/deals-carousel";

describe("<Navbar />", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    render(<DealsCarousel />);
  });
});

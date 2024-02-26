import { expect, describe, it, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";

import HeroBanners from "@/components/hero-banners";

describe("<Navbar />", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const result = render(<HeroBanners />);
    const images = result.getAllByRole("img")
    expect(images[0]).toBeInTheDocument()
  });
});

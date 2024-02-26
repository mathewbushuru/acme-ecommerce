import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";

import App from "@/App";

describe("<App />", () => {
    afterEach(cleanup);

    it("renders without crashing", ()  => {
        const result = render(<App />);
        const title = result.getByText(/acme/i);
        expect(title).toBeInTheDocument();
    })
})
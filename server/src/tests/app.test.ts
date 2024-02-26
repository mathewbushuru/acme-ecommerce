import request from "supertest";
import { describe, it, expect } from "vitest";

import app from "../app";

describe("GET /", () => {
  it("responds with a welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Acme Groceries API" });
  });
});

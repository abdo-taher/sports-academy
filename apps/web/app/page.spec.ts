import { createElement } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the application foundation", () => {
    render(createElement(Home));

    expect(
      screen.getByRole("heading", { name: "Sports Academy Platform" })
    ).toBeInTheDocument();
  });
});

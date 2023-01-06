import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Some from "./some";

describe("Tests for component 'Some'", () => {
  it("should display first 2 elements and ignore other elements", () => {
    render(
      <Some display={[0, 1]}>
        <span>First</span>
        <span>Second</span>
        <span>Third</span>
      </Some>
    );

    expect(screen.queryByText(/first/i)).toBeInTheDocument();
    expect(screen.queryByText(/second/i)).toBeInTheDocument();
    expect(screen.queryByText(/third/i)).not.toBeInTheDocument();
  });
});

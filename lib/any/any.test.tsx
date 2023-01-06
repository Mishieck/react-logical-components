import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Any from "./any";

describe("Tests for component 'Any'", () => {
  it("should display first element and ignore other elements", () => {
    render(
      <Any display={0}>
        <span>First</span>
        <span>Second</span>
        <span>Third</span>
      </Any>
    );

    expect(screen.queryByText(/first/i)).toBeInTheDocument();
    expect(screen.queryByText(/second/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/third/i)).not.toBeInTheDocument();
  });
});

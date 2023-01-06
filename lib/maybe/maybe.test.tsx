import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Maybe from "./maybe";

describe("Tests for component 'Maybe'", () => {
  it("should display element", () => {
    render(
      <Maybe display={true}>
        <span>content</span>
      </Maybe>
    );

    expect(screen.queryByText(/content/i)).toBeInTheDocument();
  });

  it("should not display element", () => {
    render(
      <Maybe display={false}>
        <span>content</span>
      </Maybe>
    );

    expect(screen.queryByText(/content/i)).not.toBeInTheDocument();
  });
});

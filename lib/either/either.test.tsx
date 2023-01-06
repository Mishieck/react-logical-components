import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Either from "./either";

describe("Tests for component 'Either'", () => {
  it("should display first element and ignore second element", () => {
    render(
      <Either displayFirst={true}>
        <span>Loading...</span>
        <div>Content</div>
      </Either>
    );

    expect(screen.queryByText(/loading/i)).toBeInTheDocument();
    expect(screen.queryByText(/content/i)).not.toBeInTheDocument();
  });
});

import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Empty from "../lib/empty";

describe("Empty tests", () => {
  it("should render fragment", () => {
    const { container } = render(<Empty />);
    expect(container).toBeEmptyDOMElement();
  });
});

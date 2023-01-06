import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ForEach from "./for-each";

describe("Tests for component 'ForEach'", () => {
  it("should display first 2 elements and ignore other elements", () => {
    const data = ["Item 1", "Item 2", "Item 3"];

    const renderItem = (item: string, index: number) => (
      <li key={String(index)}>{item}</li>
    );

    render(
      <ul>
        <ForEach<string> data={data} renderComponent={renderItem} />
      </ul>
    );

    expect(screen.queryByText(/1/i)).toBeInTheDocument();
    expect(screen.queryByText(/2/i)).toBeInTheDocument();
    expect(screen.queryByText(/3/i)).toBeInTheDocument();
  });
});

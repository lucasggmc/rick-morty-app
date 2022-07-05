import { render, screen } from "@testing-library/react";
import HomeTemplate from ".";

describe("HomePage template", () => {
  it("should renders correctly", () => {
    render(<HomeTemplate />);

    expect(screen.getByText("Rick and Morty"));
  });
});

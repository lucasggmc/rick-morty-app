import { render, screen } from "@testing-library/react";
import HomeTemplate from ".";

describe("HomePage template", () => {
  it("should renders correctly", () => {
    render(<HomeTemplate />);

    expect(screen.getByText("Rick and Morty"));
  });

  it.todo("should render the Loading component if isLoading is true", () => {});
  it.todo("should filter the characters if the search input change", () => {});
  it.todo("should render the CharacterCard component 10 times", () => {}); // I think is better add this test as an integration test
});

import { render, screen } from "@testing-library/react";
import { Character } from "../../fixtures/CharacterCard";
import { CharacterCard } from "./index";

describe("CharacterCard Component", () => {
  it("should renders correctly", () => {
    const char = Character;
    render(<CharacterCard character={char} />);

    expect(screen.getByText("Dead"));
  });
});

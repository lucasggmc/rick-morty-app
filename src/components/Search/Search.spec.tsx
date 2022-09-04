import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Search } from ".";

const handleSearch = jest.fn();

describe("Search component", () => {
  it("should call handleSearch if input change", async () => {
    render(<Search handleSearch={handleSearch} />);

    const searchInputText = screen.getByTestId("input-search");
    const textToSearch = "Rickzao";

    await userEvent.type(searchInputText, textToSearch);

    expect(handleSearch).toHaveBeenCalledTimes(textToSearch.length);
  });
});

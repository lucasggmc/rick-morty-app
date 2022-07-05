import { render, screen } from "@testing-library/react";
import { Loader } from "./index";

describe("Loader Component", () => {
  it("should renders correctly", () => {
    render(<Loader />);

    expect(screen.getByTestId("loader"));
  });
});

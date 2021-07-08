import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "pages";

describe("Context", () => {
  it("should increment state in example 1 when click button in example 2", () => {
    // arrange
    render(<Home />);
    expect(screen.getByText("State: 0")).toBeInTheDocument();
    // act
    userEvent.click(screen.getByText("Change State"));
    // assert
    expect(screen.getByText("State: 1")).toBeInTheDocument();
  });
});

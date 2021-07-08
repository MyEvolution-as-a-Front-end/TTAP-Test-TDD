import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import axiosMock from "axios";

import Home from "pages";

describe("HomePage", () => {
  beforeEach(() => render(<Home />));

  it("should increment state in example 1 when click button in example 2", () => {
    // arrange
    expect(screen.getByText("State: 0")).toBeInTheDocument();
    // act
    userEvent.click(screen.getByText("Change State"));
    // assert
    expect(screen.getByText("State: 1")).toBeInTheDocument();
  });

  it("should show an list of repositories correctly", async () => {
    axiosMock.get;

    await waitFor(() => {
      expect(screen.getAllByText(/repo/i)).toHaveLength(2);
      expect(axiosMock.get).toHaveBeenCalledTimes(1);
    });
  });
});

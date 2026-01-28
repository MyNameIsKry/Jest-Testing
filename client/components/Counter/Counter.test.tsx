import { Counter } from "@/components/Counter/Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Counter Component", () => {
  it("", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "+"
    });
    const descrementButton = screen.getByRole("button", {
      name: "-"
    });
    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();

    await user.click(descrementButton);
    await user.click(descrementButton);
    await user.click(descrementButton);

    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });
});

import { Button } from "@/components/Button/Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button Component", () => {
  it("Render and Click to Button", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Button content='Click' onClick={onClick} />);
    const button = screen.getByRole("button", {
      name: /Click/i
    });
    await user.click(button);
    // Kiem tra button co bi unmount khong?
    expect(button).toBeInTheDocument();
    // Kiem tra ham onClick duoc goi mot lan?
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

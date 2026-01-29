import { SignUpForm } from "@/components/SignUpForm/SignUpForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SignUpForm Component:", () => {
  const user = userEvent.setup();
  it("Should fill inputs with default values initially", () => {
    const defaultValues = {
      email: "abc@gmail.com",
      password: "123456"
    };
    render(<SignUpForm onSubmit={jest.fn()} defaultValues={defaultValues} />);

    expect(screen.getByPlaceholderText(/enter email/i)).toHaveValue(
      defaultValues["email"]
    );

    expect(screen.getByPlaceholderText(/enter password/i)).toHaveValue(
      defaultValues["password"]
    );
  });

  it("Should show required errors if fields are empty", async () => {
    const obSubmitMock = jest.fn();
    render(<SignUpForm onSubmit={obSubmitMock} />);
    await user.click(screen.getByText(/submit/i));

    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    expect(obSubmitMock).not.toHaveBeenCalled();
  });

  it("Should show required error if email is invalid", async () => {
    const obSubmitMock = jest.fn();
    render(<SignUpForm onSubmit={obSubmitMock} />);

    await user.type(screen.getByPlaceholderText(/enter email/i), "abc@");
    await user.type(screen.getByPlaceholderText(/enter password/i), "123456");
    await user.click(screen.getByText(/submit/i));

    expect(screen.getByText(/email is not valid/i)).toBeInTheDocument();
    expect(obSubmitMock).not.toHaveBeenCalled();
  });

  it("Should show required error if password is invalid", async () => {
    const obSubmitMock = jest.fn();
    render(<SignUpForm onSubmit={obSubmitMock} />);

    await user.type(
      screen.getByPlaceholderText(/enter email/i),
      "abc@gmail.com"
    );
    await user.type(screen.getByPlaceholderText(/enter password/i), "123");
    await user.click(screen.getByText(/submit/i));

    expect(
      screen.getByText(/password must be at least 6 characters/i)
    ).toBeInTheDocument();
    expect(obSubmitMock).not.toHaveBeenCalled();
  });

  it("Should call onSubmit and reset form when valid", async () => {
    const obSubmitMock = jest.fn();
    render(<SignUpForm onSubmit={obSubmitMock} />);

    await user.type(
      screen.getByPlaceholderText(/enter email/i),
      "abc@gmail.com"
    );
    await user.type(screen.getByPlaceholderText(/enter password/i), "123456");
    await user.click(screen.getByText(/submit/i));

    expect(screen.getByPlaceholderText(/enter email/i)).toHaveValue("");
    expect(screen.getByPlaceholderText(/enter password/i)).toHaveValue("");
    expect(obSubmitMock).toHaveBeenCalled();
  });
});

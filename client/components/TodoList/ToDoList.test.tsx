import { TodoList } from "@/components/TodoList/TodoList";
import { render, screen } from "@testing-library/react";

const mockTodos = [
  { id: 1, todo: "CV 1", completed: true, userId: 1 },
  { id: 2, todo: "CV 2", completed: false, userId: 2 }
];

describe("ToDoList Component:", () => {
  it("Fetch and display Todo List", async () => {
    jest.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      json: async () => ({ todos: mockTodos })
    } as any);

    render(<TodoList />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    for (const item of mockTodos) {
      expect(await screen.findByText(item.todo)).toBeInTheDocument();
    }
  });

  it("Fetch Failed", async () => {
    jest
      .spyOn(globalThis, "fetch")
      .mockRejectedValueOnce(new Error("Network Error"));

    render(<TodoList />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/no result/i)).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add new todo");
  const button = screen.getByText("Add");
  fireEvent.change(input, { target: { value: "Test Todo" } });
  fireEvent.click(button);
  expect(screen.getByText("Test Todo")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);

  // نجيب النص اللي جوه العنصر
  const todoText = screen.getByText("Learn React");

  // نجيب الـ <li> الأب
  const todoItem = todoText.closest("li");

  // أول ضغطة: المفروض يتحول إلى line-through
  fireEvent.click(todoText);
  expect(todoItem).toHaveStyle("text-decoration: line-through");

  // تاني ضغطة: المفروض يرجع عادي
  fireEvent.click(todoText);
  expect(todoItem).toHaveStyle("text-decoration: none");
});



test("deletes a todo", async () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  const deleteButton = todo.nextSibling;

  fireEvent.click(deleteButton);

  // ✅ انتظر فعلاً اختفاء العنصر من الـ DOM
  await waitFor(() => {
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});


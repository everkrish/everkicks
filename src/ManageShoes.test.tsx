import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

it('renders heading', () => {
  render(<App />);
  screen.getByRole("heading", { name: "Everkicks" });
});

it('supports adding a shoe', () => {
  render(<App />);
  const input: HTMLInputElement = screen.getByLabelText("Shoe name");
  const submit = screen.getByRole("button", { name: "Add shoe" });
  fireEvent.change(input, { target: { value: "Steve Madden" } });
  fireEvent.click(submit);

  // Test input is empty on submit
  expect(input.value).toEqual("");

  // Test that input has gone through
  screen.getByText("Steve Madden");
})
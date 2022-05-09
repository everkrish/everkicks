import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

it('renders heading', () => {
  render(<App />);
  screen.getByRole("heading", { name: "Everkicks: Manage Shoes" });
});


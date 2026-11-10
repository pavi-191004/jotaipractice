import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('toggles between dark and light theme', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /switch to light mode/i });
  fireEvent.click(button);
  expect(screen.getByText('light')).toBeInTheDocument();
});

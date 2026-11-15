import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'jotai';
import App from './App';

const renderApp = () =>
  render(
    <Provider>
      <App />
    </Provider>
  );

beforeEach(() => {
  localStorage.clear();
});

test('renders learn react link', () => {
  renderApp();
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('toggles between dark and light theme', () => {
  renderApp();
  const button = screen.getByRole('button', { name: /switch to light mode/i });
  fireEvent.click(button);
  expect(screen.getByText('light')).toBeInTheDocument();
});

test('persists the selected theme in localStorage', () => {
  renderApp();
  fireEvent.click(screen.getByRole('button', { name: /switch to light mode/i }));
  expect(JSON.parse(localStorage.getItem('theme'))).toBe('light');
});

test('restores the saved theme on load', () => {
  localStorage.setItem('theme', JSON.stringify('light'));
  renderApp();
  expect(screen.getByText('light')).toBeInTheDocument();
});

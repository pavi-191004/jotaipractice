import { useAtomValue } from 'jotai';
import logo from './logo.svg';
import './App.css';
import { themeAtom } from './atoms';
import ThemeToggle from './ThemeToggle';

function App() {
  const theme = useAtomValue(themeAtom);

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <ThemeToggle />
        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

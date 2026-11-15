import { useAtomValue, useSetAtom } from 'jotai';
import { themeAtom, nextThemeAtom } from './atoms';

function ThemeToggle() {
  const nextTheme = useAtomValue(nextThemeAtom);
  const setTheme = useSetAtom(themeAtom);

  return (
    <button className="App-toggle" onClick={() => setTheme(nextTheme)}>
      Switch to {nextTheme} mode
    </button>
  );
}

export default ThemeToggle;

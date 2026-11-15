import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// Persisted in localStorage so the chosen theme survives page reloads
export const themeAtom = atomWithStorage('theme', 'dark', undefined, {
  getOnInit: true,
});

// Derived atom: read-only, always the opposite of the current theme
export const nextThemeAtom = atom((get) =>
  get(themeAtom) === 'dark' ? 'light' : 'dark'
);

import { atom } from 'jotai';

export const themeAtom = atom('dark');

// Derived atom: read-only, always the opposite of the current theme
export const nextThemeAtom = atom((get) =>
  get(themeAtom) === 'dark' ? 'light' : 'dark'
);

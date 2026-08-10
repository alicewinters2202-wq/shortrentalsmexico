import { create } from 'zustand';

export type Lang = 'es' | 'en';

interface LangStore {
  lang: Lang;
  toggle: () => void;
  set: (l: Lang) => void;
}

export const useLang = create<LangStore>((set) => ({
  lang: 'es',
  toggle: () => set((s) => ({ lang: s.lang === 'es' ? 'en' : 'es' })),
  set:    (lang) => set({ lang }),
}));

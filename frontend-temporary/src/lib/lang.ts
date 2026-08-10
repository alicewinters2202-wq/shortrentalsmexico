import { cookies } from 'next/headers';
import type { Lang } from '@/store/lang.store';
import { T, type TType } from './i18n';

export async function getServerLang(): Promise<Lang> {
  const store = await cookies();
  return store.get('lang')?.value === 'en' ? 'en' : 'es';
}

export async function getT() {
  const lang = await getServerLang();
  return { t: T[lang] as unknown as TType, lang };
}

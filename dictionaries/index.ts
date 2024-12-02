import 'server-only'

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  ar: () => import('./ar.json').then((module) => module.default),
  fr: () => import('./fr.json').then((module) => module.default),
} as const

type Locale = keyof typeof dictionaries

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
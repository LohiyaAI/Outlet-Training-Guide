export type Language = "en" | "hi";

export interface LocalizedString {
  en: string;
  hi?: string;
}

export type LocalizableString = string | LocalizedString;

export interface Step {
  image: string;
  title: LocalizableString;
  description: LocalizableString;
  instruction: LocalizableString;
  narration: LocalizableString;
  durationAfterSpeech: number;
  autoScroll?: boolean;
}

/**
 * Helper to safely extract text based on selected language.
 * Backward compatible: if the value is a string (legacy data files),
 * it returns that string immediately.
 */
export function getText(value: LocalizableString | undefined, lang: Language): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.en || "";
}

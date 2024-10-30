import { I18n, Scope, TranslateOptions } from "i18n-js";
import { getLocales } from "expo-localization";
import en from "./en.json";

const translations = {
  en,
};

const i18n = new I18n(translations);

i18n.locale = getLocales()[0].languageCode ?? "en";

i18n.enableFallback = true;

const t = (key: keyof typeof en & Scope, options?: TranslateOptions) => {
  return i18n.t(key, options);
};

export default t;

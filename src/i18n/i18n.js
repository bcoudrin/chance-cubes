import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";
import moment from 'moment';

import translations_en from './locales/en';
import translations_fr from './locales/fr';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      format: function(value, format, lng) {
        if(value instanceof Date) return moment(value).format(format);
        return value;
      }
    },
    resources: {
      en: {translations: translations_en},
      fr: {translations: translations_fr}
    },
    ns: ["translations"],
    defaultNS: "translations",
    react: {
      useSuspense: false,
    }
  });

export default i18n;
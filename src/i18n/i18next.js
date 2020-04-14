import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18nResources from '../locales';

const I18NEXT_INIT_OPTIONS = {
    interpolation: {
        // React already does escaping
        escapeValue: false,
    },
    fallbackLng: 'ru',
    defaultNS: 'Common',
    fallbackNS: 'Common',
    resources: i18nResources,
    debug: true,
};

i18next
  .use(LanguageDetector)
  .init(I18NEXT_INIT_OPTIONS);

export default i18next;



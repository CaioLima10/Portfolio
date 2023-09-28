import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enJson from "./translation/en.json"
import frJson from "./translation/fr.json"
import ptBrJson from "./translation/ptBR.json"

const storedLanguage = localStorage.getItem('language');
const defaultLanguage = storedLanguage || 'pt';

i18n.use(initReactI18next).init({
    fallbackLng: defaultLanguage,
    interpolation: {
        escapeValue: false,
    },

    resources: {
        en: enJson,
        fr: frJson,
        pt: ptBrJson
    }
})
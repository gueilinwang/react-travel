import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./en.json"
import zhTW from "./zhTW.json"
const resources = {
  en: {
    translation: en,
  },
  "zh-TW": {
    translation: zhTW,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "zh-TW",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

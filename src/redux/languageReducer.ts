import i18n from "i18next"
export interface ILanguageState {
  language: "zh-TW" | "en"
  languageList: {
    name: string
    code: string
  }[]
}
const defaultLanguageState: ILanguageState = {
  language: "zh-TW",
  languageList: [
    {
      name: "中文",
      code: "zh-TW",
    },
    {
      name: "English",
      code: "en",
    },
  ],
}
const languageReducer = (state = defaultLanguageState, action) => {
  switch (action.type) {
    case "change_language":
      i18n.changeLanguage(action.payload) //TODO:reducer為純函數,不應該存在side effect
      return { ...state, language: action.payload }
    case "add_language":
      return { ...state, languageList: [...state.languageList, action.payload] }
    default:
      return state
  }
}
export default languageReducer

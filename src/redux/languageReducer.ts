export interface ILanguageState {
  language: "zh" | "en"
  languageList: {
    name: string
    code: string
  }[]
}
const defaultLanguageState: ILanguageState = {
  language: "zh",
  languageList: [
    {
      name: "中文",
      code: "zh",
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
      return { ...state, language: action.payload }
    case "add_language":
      return { ...state, languageList: [...state.languageList, action.payload] }
    default:
      return state
  }
}
export default languageReducer

import {
  CHANGE_LANGUAGE,
  ADD_LANGUAGE,
  LanguageActionTypes,
} from "./languageActions"
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
const languageReducer = (
  state = defaultLanguageState,
  action: LanguageActionTypes
) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload }
    case ADD_LANGUAGE:
      return { ...state, languageList: [...state.languageList, action.payload] }
    default:
      return state
  }
}
export default languageReducer

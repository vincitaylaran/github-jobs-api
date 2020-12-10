import * as actions from "actions/types"

interface Action {
  type: string
  payload: Payload
}

interface Payload {
  theme: Theme
}

type Theme = "light" | "dark"

const themeButtonReducer = (state = { theme: "light" }, action: Action) => {
  switch (action.type) {
    case actions.CHANGED_THEME:
      return {
        theme: action.payload.theme,
      }
    default:
      return state
  }
}

export default themeButtonReducer

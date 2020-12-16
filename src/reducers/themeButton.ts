import * as actions from "actions/types"

interface Action {
  type: string
  payload: boolean
}

const themeButtonReducer = (state = { theme: "light" }, action: Action) => {
  switch (action.type) {
    case actions.TOGGLED_THEME:
      return {
        theme: state.theme === "light" ? "dark" : "light",
      }
    default:
      return state
  }
}

export default themeButtonReducer

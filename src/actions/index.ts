import * as actions from "actions/types"

export const changeTheme = (theme: "light" | "dark") => {
  return {
    type: actions.CHANGED_THEME,
    payload: {
      theme,
    },
  }
}

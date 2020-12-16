import * as actions from "actions/types"

export const toggleTheme = () => {
  return {
    type: actions.TOGGLED_THEME,
    payload: {
      isToggled: true,
    },
  }
}

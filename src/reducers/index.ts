import { combineReducers } from "redux"
import themeButtonReducer from "reducers/themeButton"

export default combineReducers({
  themeButton: themeButtonReducer,
})

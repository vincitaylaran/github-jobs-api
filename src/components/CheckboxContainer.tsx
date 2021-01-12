import React from "react"
import { CheckboxText } from "./CheckboxText"

export function CheckboxContainer() {
  return (
    <div className="checkboxContainer">
      <input id="fullTimeCheckbox" type="checkbox" />
      <CheckboxText />
    </div>
  )
}

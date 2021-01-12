import React from "react"
import { useMediaQuery } from "@react-hook/media-query"

export function CheckboxText() {
  const matches = useMediaQuery("only screen and (min-width: 1400px)")
  return (
    <label className="fullTimeTxt" htmlFor="fullTimeCheckbox">
      {matches ? "Full Time Only" : "Full Time"}
    </label>
  )
}

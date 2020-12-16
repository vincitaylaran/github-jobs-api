import React from "react"
import { connect } from "react-redux"
import * as actions from "actions"

interface Props {
  toggleTheme: () => object
}

const ThemeButton: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <div>
      <button
        onClick={() => {
          console.log(toggleTheme())
        }}
      >
        change theme
      </button>
    </div>
  )
}

export default connect(null, actions)(ThemeButton)

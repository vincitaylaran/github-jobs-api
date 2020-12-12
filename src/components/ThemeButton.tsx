import React from "react"
import { connect } from "react-redux"
import * as actions from "actions"

// interface Props {
//   onClick: () => void
// }

const ThemeButton: React.FC = (props) => {
  return (
    <div>
      <button onClick={() => actions.changeTheme("dark")}>change theme</button>
    </div>
  )
}

export default connect(null, actions)(ThemeButton)

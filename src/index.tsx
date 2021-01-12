import React from "react"
import ReactDOM from "react-dom"
import App from "components/App"
import Root from "Root"

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <div className="app">
        <App />
      </div>
    </Root>
  </React.StrictMode>,
  document.getElementById("root")
)

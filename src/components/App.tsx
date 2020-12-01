import React, { createContext } from "react"
import "styles/App.css"
import { Home } from "pages/Home"
import { JobDescription } from "pages/JobDescription"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { useDarkTheme } from "hooks/useDarkTheme"

import { ThemeButton } from "components/ThemeButton"

export default function App() {
  const { toggleTheme } = useDarkTheme()

  return (
    <Router>
      <ThemeButton onClick={toggleTheme} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/job/:id">
          <JobDescription />
        </Route>
      </Switch>
    </Router>
  )
}

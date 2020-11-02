import React from "react"
import "./App.css"
import { Home } from "./pages/Home"
import { JobDescription } from "./pages/JobDescription"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { ThemeContext, useDarkTheme } from "./hooks/useDarkTheme"

import { ThemeButton } from "./components/ThemeButton"

export default function App() {
  const { theme, switchTheme } = useDarkTheme()

  return (
    <Router>
      <ThemeButton onClick={switchTheme} />
      <Switch>
        <ThemeContext.Provider value={theme}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/job/:id">
            <JobDescription />
          </Route>
        </ThemeContext.Provider>
      </Switch>
    </Router>
  )
}

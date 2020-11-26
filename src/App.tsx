import React, { createContext } from "react"
import "App.css"
import { Home } from "pages/Home"
import { JobDescription } from "pages/JobDescription"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { useDarkTheme } from "hooks/useDarkTheme"

import { ThemeButton } from "components/ThemeButton"

export const ThemeContext = createContext("light")

export default function App() {
  const { theme, toggleTheme } = useDarkTheme()

  return (
    <Router>
      <ThemeButton onClick={toggleTheme} />
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

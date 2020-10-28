import { createContext, useState } from "react"

export const ThemeContext = createContext("light")

export function useDarkTheme() {
  const [theme, setTheme] = useState("light")

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return { theme, switchTheme }
}

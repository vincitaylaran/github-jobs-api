import { useState } from "react"

export function useDarkTheme() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return { theme, toggleTheme }
}

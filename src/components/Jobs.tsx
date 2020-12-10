import React from "react"
import "styles/Jobs.scss"

interface Props {
  children: React.ReactNode
}

export const Jobs: React.FC<Props> = ({ children }) => {
  return <div className="grid">{children}</div>
}

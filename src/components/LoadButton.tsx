import React from "react"

interface Props {
  onClick: () => void
  children?: React.ReactNode
}

export const LoadButton: React.FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>
}

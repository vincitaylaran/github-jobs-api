import React from "react"

interface Props {
  onClick: () => void
  children?: React.ReactNode
  isLoading: boolean
}

export const LoadButton: React.FC<Props> = ({
  onClick,
  children,
  isLoading,
}) => {
  return (
    <button onClick={onClick} disabled={isLoading}>
      {children}
    </button>
  )
}

import React from "react"

interface Props {
  onClick: () => void
  children?: React.ReactNode
  disabled?: boolean
}

const Button: React.FC<Props> = ({ onClick, children, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled ? disabled : false}>
      {children}
    </button>
  )
}

export default Button

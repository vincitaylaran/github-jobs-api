import React from "react"

interface Props {
  onClick: () => void
}

export const ThemeButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={() => {
          onClick()
        }}
      >
        change theme
      </button>
    </div>
  )
}

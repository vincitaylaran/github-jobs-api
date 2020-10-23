import React, { useState } from "react"

interface Props {
  onSearch: (query: Query) => void
}

interface Query {
  description?: string
  location?: string
  isFullTimeOnly?: string | boolean
  pageNumber?: number
}

export const Filters: React.FC<Props> = ({ onSearch }) => {
  const [description, setDescription] = useState<string>()
  const [location, setLocation] = useState<string>()
  const [isFullTimeOnly, setIsFullTimeOnly] = useState<boolean>()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onSearch({
      description,
      location,
      isFullTimeOnly,
      pageNumber: 1,
    })
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Filter by title, companies, expertise..."
        style={{ width: 250 }}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Filter by location..."
        style={{ width: 250 }}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <br />
      Full Time Only
      <input
        type="checkbox"
        checked={isFullTimeOnly}
        onClick={() => setIsFullTimeOnly(isFullTimeOnly ? false : true)}
      />
      <br />
      <button>Search</button>
    </form>
  )
}

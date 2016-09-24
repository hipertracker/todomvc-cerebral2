import React from 'react'

export default function Count({entriesLeft}) {
  const item_ = entriesLeft === 1 ? ' item' : ' items'

  return (
    <span className="todo-count">
      <strong>{entriesLeft}</strong> {item_} left
    </span>
  )
}

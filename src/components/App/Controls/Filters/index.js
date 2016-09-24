import React from 'react'
import VisibilitySwap from './VisibilitySwap'

export default function Filters({visibility}) {
  return (
    <ul className="filters">
      <VisibilitySwap
        uri='#/'
        visibility="All"
        actualVisibility={visibility}
      />
      <VisibilitySwap
        uri='#/active'
        visibility="Active"
        actualVisibility={visibility}
      />
      <VisibilitySwap
        uri='#/completed'
        visibility="Completed"
        actualVisibility={visibility}
      />
    </ul>
  )
}


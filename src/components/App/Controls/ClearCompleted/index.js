import React from 'react'
import {connect} from 'cerebral-view-react'

export default connect({}, {
    clicked: 'app.clearCompleted'
  },
  function ClearCompleted({entriesCompleted, clicked}) {
    return (
      <button
        className="clear-completed"
        hidden={entriesCompleted === 0}
        onClick={() => clicked()}
      >
        Clear completed ({entriesCompleted})
      </button>
    )
  }
)
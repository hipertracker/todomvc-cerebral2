import React from 'react'
import {connect} from 'cerebral/react'
import {signal} from 'cerebral/tags'

export default connect({
    clicked: signal`app.clearCompleted`
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
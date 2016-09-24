import React from 'react'
import {connect} from 'cerebral-view-react'

export default connect({
    field: 'app.field',
  }, {
    updateField: 'app.updateField',
    addEntry: 'app.addEntry'
  },
  function ViewInput({field, updateField, addEntry}) {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={field}
          onChange={e => updateField({field: e.target.value})}
          onKeyPress={e => e.key === 'Enter' && addEntry()}
        />
      </header>
    )
  }
)
import React from 'react'
import {connect} from 'cerebral/react'
import {signal, state} from 'cerebral/tags'

export default connect({
    field: state`app.field`,
    updateField: signal`app.updateField`,
    addEntry: signal`app.addEntry`
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
          onKeyPress={e => e.key === 'Enter' && e.target.value.trim() && addEntry()}
        />
      </header>
    )
  }
)
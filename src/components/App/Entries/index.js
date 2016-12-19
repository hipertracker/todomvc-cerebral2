import _ from 'lodash'
import React from 'react'
import {connect} from 'cerebral/react'
import Entry from './Entry'

export default connect({
    entries: 'app.entries.*',
    visibility: 'app.visibility'
  }, {
    toggleAllCompleted: 'app.toggleAllCompleted',
  },
  function Entries({entries, visibility, toggleAllCompleted}) {
    if (!entries.length) return null

    const cssVisibility = {
      visibility: _.isEmpty(entries) ? 'hidden' : 'visible'
    }
    const allCompleted = _.filter(entries, entry => entry.completed).length
    const todos = _(entries)
      .filter(entry => {
        if (visibility === 'Completed') return entry.completed
        if (visibility === 'Active') return !entry.completed
        return true
      })
      .map((todo, key) => <Entry key={key} todo={todo}/>)
      .value()

    return (
      <section className="main" style={cssVisibility}>
        <input
          className="toggle-all"
          type="checkbox"
          name="toggle"
          checked={allCompleted}
          onChange={() => toggleAllCompleted()}
        />
        <label htmlFor="toggle-all">
          Mark as complete
        </label>
        <ul className="todo-list">
          {todos}
        </ul>
      </section>
    )
  }
)
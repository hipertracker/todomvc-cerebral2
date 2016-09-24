import _ from 'lodash'
import React from 'react'
import {connect} from 'cerebral-view-react'
import Entry from './Entry'

export default connect({
    entries: 'app.entries.*',
    visibility: 'app.visibility'
  },
  function Entries({entries, visibility}) {
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
          onChange={() => console.log('@Entries input changed')}
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
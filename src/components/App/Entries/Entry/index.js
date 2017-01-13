import React from 'react'
import classNames from 'classnames'
import {connect} from 'cerebral/react'
import {signal} from 'cerebral/tags'

import EditEntry from './EditEntry'

export default connect({
    deleteEntry: signal`app.deleteEntry`,
    toggleEntryCompleted: signal`app.toggleEntryCompleted`,
    editingEntry: signal`app.editingEntry`,
  },
  function Entry({todo, deleteEntry, toggleEntryCompleted, editingEntry}) {
    const classList = classNames({
      completed: todo.completed,
      editing: todo.editing
    })

    return (
      <li className={classList}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleEntryCompleted({id: todo.id})}
          />
          <label onDoubleClick={() => editingEntry({id: todo.id, editing: true})}>
            {todo.description}
          </label>
          <button
            className="destroy"
            onClick={() => deleteEntry({id: todo.id})}
          />
        </div>
        <EditEntry todo={todo}/>
      </li>
    )
  }
)

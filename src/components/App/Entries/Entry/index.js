import React from 'react'
import classNames from 'classnames'
import {connect} from 'cerebral-view-react'

export default connect({}, {
    deleteEntry: 'app.deleteEntry',
    toggleEntryCompleted: 'app.toggleEntryCompleted',
    editingEntry: 'app.editingEntry',
    updateEntry: 'app.updateEntry',
  },
  function Entry({todo, deleteEntry, toggleEntryCompleted, editingEntry, updateEntry}) {
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
            onClick={() => toggleEntryCompleted({id: todo.id})}
          />
          <label onDoubleClick={() => editingEntry({id: todo.id, editing: true})}>
            {todo.description}
          </label>
          <button
            className="destroy"
            onClick={() => deleteEntry({id: todo.id})}
          />
        </div>
        <input
          className="edit"
          value={todo.description}
          name="title"
          id={`todo-${todo.id}`}
          onChange={e => {
            if (e.key === 'Enter') {
              editingEntry({id: todo.id, editing: false})
            } else {
              updateEntry({id: todo.id, description: e.target.value})
            }
          }}
          onBlur={() => editingEntry({id: todo.id, editing: false})}
          onKeyPress={e => e.key === 'Enter' && editingEntry({id: todo.id, editing: false})}
        />
      </li>
    )
  }
)

import React from 'react'
import classNames from 'classnames'
import {connect} from 'cerebral-view-react'

export default connect({}, {
    deleteEntry: 'app.deleteEntry',
    toggleEntryCompleted: 'app.toggleEntryCompleted',
  },
  function Entry({todo, deleteEntry, toggleEntryCompleted}) {
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
          <label
            onDoubleClick={() => console.log('@Entry label doubleClicked')}
          >
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
          onChange={() => console.log('@Entry input changed')}
          onBlur={() => console.log('@Entry input blured')}
          onKeyPress={e => e.key === 'Enter' && console.log('@Entry input keyPressed')}
        />
      </li>
    )
  }
)

import React, {Component} from 'react'
import {connect} from 'cerebral-view-react'

export default connect({}, {
    editingEntry: 'app.editingEntry',
    updateEntry: 'app.updateEntry',
  },
  class EditEntry extends Component {
    componentDidUpdate (prevProps) {
      if (!prevProps.todo.editing && this.props.todo.editing) {
        this.refs.edit.focus()
      }
    }
    render() {
      const {todo, editingEntry, updateEntry} = this.props
      return (
        <input
          ref="edit"
          className="edit"
          value={todo.description}
          name="title"
          id={`todo-${todo.id}`}
          onChange={e => {
            if (e.key === 'Enter') {
              editingEntry({id: todo.id, editing: false})
            } else if (e.target.value.trim()) {
              updateEntry({id: todo.id, description: e.target.value})
            }
          }}
          onBlur={() => editingEntry({id: todo.id, editing: false})}
          onKeyPress={e => e.key === 'Enter' && editingEntry({id: todo.id, editing: false})}
        />

      )
    }
  }
)

import model from './model'

import addEntry from './chains/addEntry'
import updateField from './chains/updateField'
import changeVisibility from './chains/changeVisibility'
import clearCompleted from './chains/clearCompleted'
import deleteEntry from './chains/deleteEntry'
import toggleTodoCompleted from './chains/toggleTodoCompleted'

export default module => {

  module.addModules({})

  module.addState(model)

  module.addSignals({
    addEntry,
    updateField,
    changeVisibility,
    clearCompleted,
    deleteEntry,
    toggleTodoCompleted,
  })
}

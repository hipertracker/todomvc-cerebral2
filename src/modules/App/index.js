import addEntry from './chains/addEntry'
import deleteEntry from './chains/deleteEntry'
import updateField from './chains/updateField'
import changeVisibility from './chains/changeVisibility'
import clearCompleted from './chains/clearCompleted'
import toggleEntryCompleted from './chains/toggleEntryCompleted'
import editingEntry from './chains/editingEntry'
import updateEntry from './chains/updateEntry'
import toggleAllCompleted from './chains/toggleAllCompleted'
import visibilityRouted from './chains/visibilityRouted'
import rootRouted from './chains/rootRouted'

export default {
  state: {
    entries: [],
    visibility: 'All',
    field: '',
    uid: 0
  },
  signals: {
    addEntry,
    deleteEntry,
    updateField,
    changeVisibility,
    clearCompleted,
    toggleEntryCompleted,
    editingEntry,
    updateEntry,
    toggleAllCompleted,
    visibilityRouted,
    rootRouted,
  }
}

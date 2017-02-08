import _ from 'lodash'

export default function editingEntry({props, state}) {
  const {id, editing} = props
  const entries = state.get('app.entries')
  const newEntries = _.map(entries, entry => {
    if (entry.id === id) return {...entry, editing}
    return entry
  })
  state.set('app.entries', newEntries)
}

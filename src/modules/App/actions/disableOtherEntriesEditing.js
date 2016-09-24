import _ from 'lodash'

export default function disableOtherEntriesEditing({input, state}) {
  const {id} = input
  const entries = state.get('app.entries')
  const newEntries = _.map(entries, entry => {
    if (entry.id !== id) return {...entry, editing: false}
    return entry
  })
  state.set('app.entries', newEntries)
}

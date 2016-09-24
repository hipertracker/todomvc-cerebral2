import _ from 'lodash'

export default function updateEntry({input, state}) {
  const {id, description} = input
  const entries = state.get('app.entries')
  const newEntries = _.map(entries, entry => {
    if (entry.id === id) return {...entry, description}
    return entry
  })
  state.set('app.entries', newEntries)
}

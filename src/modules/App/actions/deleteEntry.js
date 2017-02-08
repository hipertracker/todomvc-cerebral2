import _filter from 'lodash/filter'

export default function deleteEntry({props, state}) {
  const {id} = props
  const entries = state.get('app.entries')
  const newEntries = _filter(entries, entry => entry.id !== id)
  state.set('app.entries', newEntries)
}

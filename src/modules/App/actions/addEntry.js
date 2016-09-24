export default function addEntry({state}) {
  const id = state.get('app.uid') + 1
  const newEntry = {
    description: state.get('app.field'),
    completed: false,
    editing: false,
    id,
  }
  state.set('app.entries', state.get('app.entries').concat(newEntry))
  state.set('app.uid', id)
  state.set('app.field', '')

}

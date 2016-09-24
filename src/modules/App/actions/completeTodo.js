export default function completeTodo({input, state}) {
  const {id} = input
  const entries = state.get('app.entries').map(entry => {
    if (entry.id === id) return {...entry, completed: true}
    return entry
  })
  state.set('app.entries', entries)
}

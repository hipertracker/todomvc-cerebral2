export default function clearCompleted({state}) {
  const entries = state.get('app.entries').filter(entry => !entry.completed)
  state.set('app.entries', entries)

}

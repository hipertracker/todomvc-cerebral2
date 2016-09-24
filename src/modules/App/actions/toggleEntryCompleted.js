export default function toggleEntryCompleted({input, state}) {
  const path = `app.entries.${input.id - 1}`
  state.set(`${path}.completed`, !state.get(`${path}.completed`))
}

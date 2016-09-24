export default function editingEntry({input, state}) {
  state.set(`app.entries.${input.id - 1}.editing`, input.editing)
}

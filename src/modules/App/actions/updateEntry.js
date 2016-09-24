export default function updateEntry({input, state}) {
  state.set(`app.entries.${input.id - 1}.description`, input.description)
}

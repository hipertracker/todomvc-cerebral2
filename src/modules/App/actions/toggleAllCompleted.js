import _ from 'lodash'

export default function toggleAllCompleted({state}) {
  const entries = state.get('app.entries')
  const allCompleted = _.every(entries, {completed: true})
  const newEntries = _.map(entries, entry => ({...entry, completed: !allCompleted}))
  state.set('app.entries', newEntries)
}

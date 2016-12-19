import {input, set, state} from 'cerebral/operators'

export default [
  set(state`app.visibility`, input`visibility`)
]
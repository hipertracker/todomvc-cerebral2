import {input, set, state} from 'cerebral/operators'

export default [
  set(state`app.field`, input`field`)
]
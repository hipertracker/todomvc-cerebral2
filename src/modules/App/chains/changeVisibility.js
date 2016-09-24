import {copy} from 'cerebral/operators'

export default [
  copy('input:visibility', 'state:app.visibility')
]
import {copy} from 'cerebral/operators'

export default [
  copy('input:field', 'state:app.field')
]
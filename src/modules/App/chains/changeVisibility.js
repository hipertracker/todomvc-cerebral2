import {props, state} from 'cerebral/tags'
import {set} from 'cerebral/operators'

export default [
    set(state`app.visibility`, props`visibility`)
]
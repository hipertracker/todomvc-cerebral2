import React from 'react'
import {connect} from 'cerebral/react'
import ClearCompleted from './ClearCompleted'
import Count from './Count'
import Filters from './Filters'

export default connect({
    visibility: 'app.visibility',
    entries: 'app.entries.*'
  },
  function Controls({visibility, entries}) {
    if (!entries.length) return null

    const entriesCompleted = entries.filter(x => x.completed).length
    const entriesLeft = entries.length - entriesCompleted

    return (
      <footer className="footer">
        <Count entriesLeft={entriesLeft}/>
        <Filters visibility={visibility}/>
        <ClearCompleted entriesCompleted={entriesCompleted}/>
      </footer>
    )
  }
)



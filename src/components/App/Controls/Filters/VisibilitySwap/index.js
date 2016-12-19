import React from 'react'
import classNames from 'classnames'
import {connect} from 'cerebral/react'

export default connect(
  {}, {
    clicked: 'app.changeVisibility'
  },
  function VisibilitySwap({uri, visibility, actualVisibility, clicked}) {
    const styles = classNames({
      selected: visibility === actualVisibility
    })

    return (
      <li onClick={() => clicked({visibility})}>
        <a href={uri} className={styles}>
          {visibility}
        </a>
      </li>
    )
  }
)


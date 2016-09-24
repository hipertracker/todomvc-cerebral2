import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

import React from 'react'
import {render} from 'react-dom'
import {Container} from 'cerebral-view-react'
import controller from './controller'

import App from './components/App'

render(
  <Container controller={controller} strict>
    <App/>
  </Container>, document.querySelector('#app'))

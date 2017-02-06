import {Controller} from 'cerebral'
import Devtools from 'cerebral/devtools'
import router from './router'
import app from './modules/App'

export default Controller({
  devtools: Devtools({
    remoteDebugger: 'localhost:8585'
  }),
  router,
  modules: {
    app
  }
})

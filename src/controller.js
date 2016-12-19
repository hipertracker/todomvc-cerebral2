import {Controller} from 'cerebral'
import Devtools from 'cerebral/devtools'
import router from './router'
// import http from './providers/http'
// import cache from './providers/cache'
import app from './modules/App'

export default Controller({
  options: {
    strictRender: true,
  },
  devtools: Devtools(),
  router,
  modules: {
    app
  }
})

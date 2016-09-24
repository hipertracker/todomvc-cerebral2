import {Controller} from 'cerebral'
import Model from 'cerebral-model-immutable'
import DevTools from 'cerebral-module-devtools'
import App from './modules/App'
// import router from './routes'

const controller = Controller(Model({}))

controller.addModules({
  app: App,
  devtools: DevTools(),
  // router
})

export default controller

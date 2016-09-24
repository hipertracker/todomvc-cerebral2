import Router from 'cerebral-module-router'

export default Router({
  '/': 'app.rootRouted',
  '/:filter': 'app.filterClicked',
}, {
  onlyHash: true
})

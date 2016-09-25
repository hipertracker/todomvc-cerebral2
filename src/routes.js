import Router from 'cerebral-module-router'

export default Router({
  '/': 'app.rootRouted',
  '/:visibility': 'app.visibilityRouted',
}, {
  onlyHash: true
})

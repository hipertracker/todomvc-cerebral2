import Router from 'cerebral-router'

export default Router({
  routes: {
    '/': 'app.rootRouted',
  },
  query: true,
  onlyHash: true,
})

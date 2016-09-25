// import redirect from 'cerebral-module-router/redirect'

export default function visibilityRouted({input, state}) {
  switch (input.visibility) {
    case 'active':
      state.set('app.visibility', 'Active')
      break
    case 'completed':
      state.set('app.visibility', 'Completed')
      break
    default:
      state.set('app.visibility', 'All')
      // redirect('/') // it does not work :(
      document.location = '/#/'

  }
}

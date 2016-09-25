// import redirect from 'cerebral-module-router/redirect'
// import redirectToSignal from 'cerebral-module-router/redirectToSignal'

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
      // redirectToSignal('app.visibilityRouted', {visibility: ''}) // also does not work :(
      document.location = '/#/' // only this works

  }
}
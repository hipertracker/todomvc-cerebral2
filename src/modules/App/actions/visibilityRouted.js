export default function visibilityRouted({props, router, state}) {
  switch (props.visibility) {
    case 'active':
      state.set('app.visibility', 'Active')
      break
    case 'completed':
      state.set('app.visibility', 'Completed')
      break
    default:
      state.set('app.visibility', 'All')
      router.redirect('/')
  }
}

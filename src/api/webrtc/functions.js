/** Disconnect and Quit the Meeting Room */
const hangUp = () => {
  //TODO: Implement disconnect the current user from the meeting...
  alert('En cours de développement...')

  document.location = '/'
}

/** Perform an action according to the source */
const actionHandler = (e) => {
  let source = e.target.id
  switch (source) {
    case 'hangUp':
      hangUp()
      break
    default:
      alert('Cette action ne peut-être réalisée !!!')
      break
  }
}
  
/** Init interface with an event layer based on click for controls icon */
const initialize = () => {
    const controlBtns = document.querySelectorAll('.control')
    Array.from(controlBtns).forEach((element, index) => {
        element.addEventListener('click', (e) => actionHandler(e))
    })
}

export default initialize
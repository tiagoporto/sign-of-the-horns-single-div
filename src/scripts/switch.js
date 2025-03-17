const trackEvent = (type) => {
  if (process.env.NODE_ENV === 'production' && globalThis.gtag) {
    globalThis.gtag('event', 'sign_of_the_horns', {
      event_label: type,
    })
  }
}

document.querySelector('#switch-input').addEventListener('change', (event) => {
  const signOfTheHornsClasses =
    document.querySelector('#sign-of-the-horns').classList

  if (event.target.checked) {
    signOfTheHornsClasses.remove('sign-of-the-horns_detailed')
    signOfTheHornsClasses.add('sign-of-the-horns_simplified')
    trackEvent('Simplified Version')
  } else {
    signOfTheHornsClasses.add('sign-of-the-horns_detailed')
    signOfTheHornsClasses.remove('sign-of-the-horns_simplified')
    trackEvent('Detailed Version')
  }
})

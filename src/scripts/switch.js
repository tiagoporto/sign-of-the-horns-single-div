const trackEvent = (type) => {
  if (process.env.NODE_ENV === 'production' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'switch',
      event_label: 'Switch Sign Of The Horns',
      value: type,
    })
  }
}

document.querySelector('#switch-input').addEventListener('change', (event) => {
  const signOfTheHornsClasses =
    document.querySelector('#sign-of-the-horns').classList

  if (event.target.checked) {
    signOfTheHornsClasses.remove('sign-of-the-horns_detailed')
    signOfTheHornsClasses.add('sign-of-the-horns_simplified')
    trackEvent('simplified')
  } else {
    signOfTheHornsClasses.add('sign-of-the-horns_detailed')
    signOfTheHornsClasses.remove('sign-of-the-horns_simplified')
    trackEvent('detailed')
  }
})

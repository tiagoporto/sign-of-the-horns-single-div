document.querySelector('#switch-input').addEventListener('change', (event) => {
  const signOfTheHornsClasses =
    document.querySelector('#sign-of-the-horns').classList
  if (event.target.checked) {
    signOfTheHornsClasses.remove('sign-of-the-horns_detailed')
    signOfTheHornsClasses.add('sign-of-the-horns_simplified')
  } else {
    signOfTheHornsClasses.add('sign-of-the-horns_detailed')
    signOfTheHornsClasses.remove('sign-of-the-horns_simplified')
  }
})

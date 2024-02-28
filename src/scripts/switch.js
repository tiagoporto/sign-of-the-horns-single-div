document.querySelector('#switch-mode').addEventListener('change', (event) => {
  const signOfTheHornsClasses =
    document.querySelector('#sign-of-the-horns').classList
  if (event.target.checked) {
    signOfTheHornsClasses.remove('detailed')
    signOfTheHornsClasses.add('simplified')
  } else {
    signOfTheHornsClasses.add('detailed')
    signOfTheHornsClasses.remove('simplified')
  }
})

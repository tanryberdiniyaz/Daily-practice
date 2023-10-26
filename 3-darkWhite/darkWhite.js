function changeMode() {
  const body = document.querySelector('body')
  const isDark = body.classList.contains('dark')

  if (isDark) {
    body.classList.remove('dark')
  } else {
    body.classList.add('dark')
  }
}

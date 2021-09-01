const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const bodyTheme = document.querySelector('body')
  const saveTheme = localStorage.getItem('Theme')
  const switchTheme = document.querySelector('#theme-switch-toggle')

  switchTheme.addEventListener('change', checkSwitch)
  bodyTheme.classList.add('light-theme')

  const themeInSave = function() {
      if(saveTheme === 'dark') {
        dakrTheme()
        switchTheme.setAttribute('checked', true)
      }
  }

  themeInSave()

function dakrTheme() {
    bodyTheme.classList.add('dark-theme') || bodyTheme.classList.remove('light-theme')
    localStorage.setItem('Theme', 'dark');
}

function lightTheme() {
    bodyTheme.classList.add('light-theme') || bodyTheme.classList.remove('dark-theme')
    localStorage.setItem('Theme', 'light');
}

function checkSwitch(e) {
    dakrTheme()
    if(!e.target.checked) {lightTheme()}
}
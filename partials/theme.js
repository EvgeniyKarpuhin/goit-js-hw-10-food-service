const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const bodyTheme = document.querySelector('body')
  const saveTheme = localStorage.getItem('Theme')
  const switchTheme = document.querySelector('.theme-switch__toggle')

  switchTheme.addEventListener('change', onSwitchCheckBox)
  bodyTheme.classList.add('light-theme')

  const themeInSave = function() {
      if(saveTheme === 'dark') {
        themeInSave()
        switchTheme.setAttribute('cheked', true)
      }
  }
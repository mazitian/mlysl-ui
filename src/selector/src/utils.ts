export default {
  mounted(el: any) {
    const oEl = el.querySelector('.ml-option')
    const oInputEl = oEl.querySelector('input')
    const oPlaceholderEl = oEl.querySelector('label')
    const oIcon1El = oEl.querySelector('.ml-option__icon1')
    const oIcon2El = oEl.querySelector('.ml-option__icon2')
    const oMenuEl = el.querySelector('.ml-selector__menu')
    oPlaceholderEl.addEventListener('click', () => oInputEl.focus())
    oInputEl.addEventListener('focus', () => {
      oPlaceholderEl.style.display = 'none'
      oIcon1El.style.display = 'none'
      oIcon2El.style.display = 'block'
      setTimeout(() => {
        oMenuEl.style.display = 'block'
      }, 100)
    })
    oInputEl.addEventListener('blur', () => {
      oIcon1El.style.display = 'block'
      oIcon2El.style.display = 'none'
      setTimeout(() => {
        oMenuEl.style.display = 'none'
        oPlaceholderEl.style.display = 'block'
      }, 100)
    })
  }
}

const calculadora = document.querySelector('.calculadora')
const keys = calculadora.querySelector('.calculadora__keys')
const display = document.querySelector('.calculadora__display')

keys.addEventListener('click', e => {

  const key = e.target
  const action = key.dataset.action
  const keyContent = key.textContent
  const displayedNum = display.textContent


  if (e.target.matches('button')) {
    if (e.target.matches('button')) {
      const key = e.target
      Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
  }

  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    key.classList.add('is-depressed')

    }
    if (action === 'decimal') {
      console.log('decimal key!')
    }

    if (action === 'clear') {
      console.log('clear key!')
    }

    if (action === 'calculate') {
      console.log('equal key!')
    }
  }

  if (action === 'decimal') {
    display.textContent = displayedNum + '.'
  }

  if (!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent
    } else {
      display.textContent = displayedNum + keyContent
    }
  }
})
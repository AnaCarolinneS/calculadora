const calculadora = document.querySelector('.calculadora')
const keys = calculadora.querySelector('.calculadora__keys')
const display = document.querySelector('.calculadora__display')
const string = 'The hamburgers taste pretty good!'
const hasExclamation = string.includes('!')
console.log(hasExclamation) // true

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
      calculadora.dataset.previousKeyType = 'operator'
      calculadora.dataset.firstValue = displayedNum
      calculadora.dataset.operator = action
    }

    const previousKeyType = calculadora.dataset.previousKeyType

    if (action == 'clear') {
      console.log('cl5555 key!')
      calculadora.dataset.previousKeyType = '0'
    }

    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
      calculadora.dataset.previousKey = 'number'
    }

    const calculate = (n1, operator, n2) => {
      let result = ''

      if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
      } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2)
      } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2)
      } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2)
      }

      return result
    }

    if (action === 'calculate') {
      const firstValue = calculadora.dataset.firstValue
      const operator = calculadora.dataset.operator
      const secondValue = displayedNum

      display.textContent = calculate(firstValue, operator, secondValue)
      calculadora.dataset.previousKeyType = 'calculate'
    }

    if (action === 'decimal') {
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.'
      } else if (previousKeyType === 'operator') {
        display.textContent = '0.'
      }
      
    calculator.dataset.previousKeyType = 'decimal'
    }
  }
})
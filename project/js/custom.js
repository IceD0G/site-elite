const inputTel = document.querySelector('input[type="tel"]')
const closeForm = document.querySelector('.form-group__x')
const form = document.querySelector('.callback-form')
const openForm = document.querySelector('.left-menu__callback-link a')
const phone = document.querySelector('.left-menu__top-callback-form img')
const closeSuccess = document.querySelector('.callback-form__wrapper-form-success .form-group__x')
const successForm = document.querySelector('.callback-form__wrapper-form-success')
const mainPage = document.querySelector('.callback-form__wrapper-form-success-message-button')


mainPage.addEventListener('click', () => {
  successForm.classList.remove('show_success')
  form.style.display = 'none'
})

closeSuccess.addEventListener('click', () => {
  successForm.classList.remove('show_success')
})

function open(e) {
  e.preventDefault()
  form.style.display = 'flex'
}

const inputMask = new Inputmask('+7 (999) 999-99-99')
inputMask.mask(inputTel)

openForm.addEventListener('click', open)
phone.addEventListener('click', open)

closeForm.addEventListener('click', () => {
  form.style.display = 'none'
})



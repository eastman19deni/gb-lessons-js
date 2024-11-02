const input = document.getElementById('from')
const span = document.querySelector('span')

input.addEventListener('input', () => {
    span.textContent = input.value
})

const massageBtn = document.querySelector('.messageBtn')
const message = document.querySelector('.message')

messageBtn.addEventListener('click', () => {
    message.classList.add('animate_animated', 'animate_fadeInLeftBig')
    message.style.visibility = 'visible'
})

const form = document.querySelector('form')
const inputs = form.querySelectorAll('.form-control')

form.addEventListener('submit', (event) => {
    let isValid = true

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.classList.add('error')
            isValid = false
        }
    })

    if (!isValid) {
        event.preventDefault()
    }
})

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() === '') {
            input.classList.add('error')
        }
    })
})
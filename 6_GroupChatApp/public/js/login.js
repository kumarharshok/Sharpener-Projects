const form = document.querySelector('form');
const identifire = document.querySelector('#identifire');
const passwordInput = document.querySelector('#password');

const API_URL = 'http://localhost:4000/login'

function handleFormSubmit(event) {
    event.preventDefault();

    const newUser = {
        identifire: identifire.value,
        password: passwordInput.value
    }

    axios.post(API_URL, newUser)
        .then((res) => {
            alert('Login Successfully')
        })
        .catch((error) => {
            alert('Something went wrong');
        })
}

form.addEventListener('submit', handleFormSubmit);
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const numberInput = document.querySelector('#tel');
const passwordInput = document.querySelector('#password');

const API_URL = 'http://localhost:4000/signup' 

function handleFormSubmit(event) {
    event.preventDefault();

    const newUser = {
        username: nameInput.value,
        email: emailInput.value,
        number: numberInput.value,
        password: passwordInput.value.trim()
    }

    axios.post(API_URL, newUser)
        .then((res) => {
            alert('SignUp Successfully')
        })
        .catch((error) => {
            alert('Something went wrong');
            console.log(error);
        })
}

form.addEventListener('submit', handleFormSubmit);
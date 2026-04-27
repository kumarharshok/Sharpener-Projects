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
            alert(res.data.message);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            window.location.href = "chatUI.html";
        })
        .catch((error) => {
            console.log(error);
            alert(error.response.data.message);
        })
}

form.addEventListener('submit', handleFormSubmit);
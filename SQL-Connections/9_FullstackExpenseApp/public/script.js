
const form = document.querySelector('form')
const amountInput = document.querySelector('#amount');
const descriptionInput = document.querySelector('#description');
const categoryInput = document.querySelector('#category');
const ul = document.querySelector('ul');

let editingId = null;

const API_URL = "http://localhost:4000/expense";

function handleFormSubmit(event) {
    event.preventDefault();
    const newUser = {
        amount: amountInput.value,
        description: descriptionInput.value,
        category: categoryInput.value
    }

    if(editingId) {
        axios.put(`${API_URL}/${editingId}`, newUser)
        .then(() => {
            console.log("expense updated from webPage!");
            editingId = null;
            form.reset();
            getAllUsers();
        })
        .catch ((error) => {
            console.log(error);
        })
    } else {
        axios.post(API_URL, newUser)
    .then(() => {
        console.log("expense added from webPage!")
        form.reset();
        getAllUsers();
    })
    .catch ((error) => {
        console.log(error);
    })
    }

    
}

function getAllUsers() {
    axios.get(API_URL)
    .then((res) => {
        const data = res.data;
        ul.innerHTML = "";
        for(let i = 0; i < data.length; i++) {
            const expense = data[i];
            displayUser(expense);
        }
    })
    .catch ((error) => {
        console.log(error);
    })
}
function displayUser(user) {
    const li = document.createElement('li');
    li.textContent = `amount: ${user.amount} / description: ${user.description} / category: ${user.category}`
    ul.appendChild(li);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Remove";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener('click', () => {
        axios.delete(`${API_URL}/${user.id}`)
        .then(() => {
            console.log("expense deleted from webPage!");
            getAllUsers();
        })
        .catch((error) => {
            console.log("Error deleting data: ", error);
        })
    })
    li.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = "edit-btn";

    editButton.addEventListener('click', () => {
        amountInput.value = user.amount;
        descriptionInput.value = user.description;
        categoryInput.value = user.category;

        editingId = user.id;

    })
    li.appendChild(editButton);
}




form.addEventListener('submit', handleFormSubmit);
getAllUsers();



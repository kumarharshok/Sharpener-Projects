const form1 = document.querySelector('#form1');
const nameInput = document.querySelector('#name');
const prosInput = document.querySelector('#pros');
const consInput = document.querySelector('#cons');
const ul = document.querySelector('ul');

const API_URL = "http://localhost:4000/reviews";

function handleFormSubmit(event) {
    event.preventDefault();

const selectedRating = document.querySelector('input[name="rating"]:checked');

    if(!selectedRating) {
        alert("Please select a rating!");
        return;
    }

    const newUser = {
        company_name: nameInput.value,
        pros: prosInput.value,
        cons: consInput.value,
        rating: selectedRating.value
    }

    axios.post(API_URL, newUser)
    .then(() => {
        alert("Review added successfully!");
        form1.reset();
    })
    .catch((error) => {
        alert("Something went wrong!");
        console.log(error);
    })
}


const searchInput = document.querySelector('#search');
const form2 = document.querySelector('#form2');
function loadReviews(event) {
    event.preventDefault();
    axios.get(`${API_URL}/${searchInput.value}`)
    .then((res) => {
        const reviews = res.data;
        ul.innerHTML = "";
        for(let i = 0; i < reviews.length; i++) {
            const li = document.createElement('li');
            const review = reviews[i];
            li.innerHTML = `
            <br>
            <h1>Review #${i+1}</h1>
            <h3>Pros: </h3>
            <p>${review.pros}</p>
            <h3>Cons: </h3>
            <p>${review.cons}</p>
            <h3>Rating: ${review.rating}/5</h3>
            <br>
            `;
            ul.appendChild(li);
        }
    } )
}

form2.addEventListener('submit', loadReviews);
form1.addEventListener('submit', handleFormSubmit);
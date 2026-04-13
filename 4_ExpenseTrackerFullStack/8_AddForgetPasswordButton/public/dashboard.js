        const form = document.querySelector('form');
        const amountInput = document.querySelector('#amount');
        const descInput = document.querySelector('#des');
        const categoryInput = document.querySelector('#category');
        const ul = document.querySelector('ul');
        const premiumBtn = document.querySelector('#buy-premium');
        const navBar = document.querySelector('nav');
        const mainContainer = document.querySelector('#container');


        const API_URL = "http://localhost:4000/dashboard";

        const user = JSON.parse(localStorage.getItem("user"));

        if(!user) {
            window.location.href = "login.html"
        }
        const userId =user.id;

    
        // IF USER IS PREMIUM
        if(user.isPrimeuser) {
            premiumBtn.style.display = "none";
            const premiumText = document.createElement('p');
            premiumText.textContent = "You are a premium user🎉";
            navBar.appendChild(premiumText);

            const leadboardBtn = document.createElement('button');
            leadboardBtn.className = "lead-btn";
            leadboardBtn.textContent = "Leadboard"

            navBar.appendChild(leadboardBtn);

            leadboardBtn.addEventListener('click', () => {

                const exisitngLeadboard = document.querySelector('.leadboard');
                if(exisitngLeadboard) {
                    exisitngLeadboard.remove();
                }
                axios.get(`${API_URL}`)
                .then((res) => {
                    const data = res.data;
                    console.log(data);
                    const containerDiv = document.createElement('div');
                    containerDiv.className = "leadboard";
                    containerDiv.innerHTML = "<h1>Leadboard</h1>";
                    mainContainer.appendChild(containerDiv);

                    const ul = document.createElement('ul');
                        ul.className = "leadboard-ul";
                        ul.innerHTML = "";
                        containerDiv.appendChild(ul);
                        
                    for(let i = 0; i < data.length; i++) {
                        const user = data[i];
                        const li = document.createElement('li');
                        li.className="leadboard-ul";
                        li.innerHTML = `
                        <div class="expense-text">
                        <span class="amount">Rank ${i+1}</span>
                            <span>${user.name}</span>
                            <span>${user.totalExpenses}</span>
                        </div>
                        `
                        ul.appendChild(li);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
            })

        }

        // ADDING NEW EXPENSE
        function handleFormSubmit(event) {
            event.preventDefault();

            const newUser = {
                amount: amountInput.value,
                description: descInput.value,
                userId: userId
            }

            axios.post(API_URL, newUser)
            .then((res) => {
                alert(res.data.message);
                form.reset();
            })
            .catch((error) => {
                alert(error.response.data.message);
            })
        }

        form.addEventListener('submit', handleFormSubmit);

        

        // SHOWING ALL EXPENSES AFTER LOGIN
        function getAllExpenses() {
            axios.get(`${API_URL}/${userId}`)
            .then((res) => {
                const userExpense = res.data.data;
                console.log(userExpense);

                ul.innerHTML="";

                for(let i = 0; i < userExpense.length; i++) {
                    const data = userExpense[i];
                    const li = document.createElement('li');

                    const delteBtn = document.createElement('button');
                    delteBtn.textContent = "Delete";
                    delteBtn.className = "delete-btn";

                    delteBtn.addEventListener('click', () => {
                        axios.delete(`${API_URL}/${data.id}`)
                        .then(() => {
                            getAllExpenses();
                        })
                        .catch((error) => {
                            alert(error.response.data.message);
                        })
                    })
                    li.innerHTML = `<div class="expense-text">
                        <span class="amount">₹ ${data.amount}</span>
                            <span>${data.description}</span>
                            <span>${data.category}</span>
                        </div>
                    `
                    ul.appendChild(li);
                    li.appendChild(delteBtn);

                    
                }
            })
            
        }
        
        // FOR PREMIUM BUTTON
        function buyPremium() {
            axios.post(`${API_URL}/purchase/${userId}`)
            .then((res) => {
                alert(res.data.message);
                localStorage.setItem('user', JSON.stringify(res.data.user));
            })
            .catch((error) => {
                alert(error.response.data.message);
            })
        }

    


        window.addEventListener("DOMContentLoaded", getAllExpenses);


  
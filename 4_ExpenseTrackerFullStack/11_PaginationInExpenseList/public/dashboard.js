const form = document.querySelector('form');
const amountInput = document.querySelector('#amount');
const descInput = document.querySelector('#des');
const categoryInput = document.querySelector('#category');
const ul = document.querySelector('ul');
const premiumBtn = document.querySelector('#buy-premium');
const navBar = document.querySelector('nav');
const mainContainer = document.querySelector('#container');
const logoutBtn = document.querySelector('#logout');

let allData = [];
let currentFilter = "all";


const API_URL = "http://localhost:4000/dashboard";

const user = JSON.parse(localStorage.getItem("user"));
document.querySelector('#welcome-name').textContent = `Welcome, ${user.name}`;

if (!user) {
    window.location.href = "login.html"
}
const userId = user.id;

// IF USER IS PREMIUM
if (user.isPrimeuser) {
    premiumBtn.style.display = "none";

    const leadboardBtn = document.createElement('button');
    leadboardBtn.className = "lead-btn";
    leadboardBtn.textContent = "Leadboard"
    leadboardBtn.style = "margin-right: -33%;"

    navBar.insertBefore(leadboardBtn, logoutBtn);

    leadboardBtn.addEventListener('click', () => {

        const exisitngLeadboard = document.querySelector('.leadboard');
        if (exisitngLeadboard) {
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

                for (let i = 0; i < data.length; i++) {
                    const user = data[i];
                    const li = document.createElement('li');
                    li.className = "leadboard-ul";
                    li.innerHTML = `
                        <div class="expense-text">
                        <span class="amount">Rank ${i + 1}</span>
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

} else {
    const premiumHeading = document.querySelector('#premium-heading');
    premiumHeading.style.display = "none";
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
            // alert(res.data.message);
            const p = document.createElement('p');
            p.textContent = "Expense added successfully!";
            p.style = "color: green";
            form.appendChild(p);
            form.reset();
            setTimeout(() => {
                p.textContent = "";
            }, 2000);
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
            userExpense.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            allData = userExpense;
            ul.innerHTML = "";

            const paginatedData = getPaginatedData(userExpense);

           for (let i = 0; i < paginatedData.length; i++) {
                const data = paginatedData[i];
                const li = document.createElement('li');
                if (data.isIncome == true) {
                    li.style = "border-left: 5px solid #00ff37;"
                }

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
                new Date(data.createdAt).toLocaleDateString()
                li.innerHTML = `<div class="expense-text">
                        <span class="amount">₹ ${data.amount}</span><span><i>${data.category}</i></span>
                        </div>
                        <div style="display: flex;
    justify-content: right;
    margin-right: -170px;
    align-items: center;
    font-size: 12px;">${new Date(data.createdAt).toLocaleDateString()}</div> 
                    `
                ul.appendChild(li);
                li.appendChild(delteBtn);


            }
            document.getElementById("page-number").textContent = `Page ${currentPage}`;
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

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user');
    window.location.href = "log-in.html";
})


const incomeForm = document.querySelector('#income');
const incomeInput = document.querySelector('#income-amount');
const incomeDes = document.querySelector('#inc-des');

const API_URL_INCOME = "http://localhost:4000/dashboard/income";

function handleFormSubmitForIncome(event) {
    event.preventDefault();

    const userId = user.id;

    const newUser = {
        amount: incomeInput.value,
        description: incomeDes.value,
        isIncome: true,
        userId: userId
    }

    axios.post(API_URL_INCOME, newUser)
    .then((res) => {
        const p = document.createElement('p');
            p.textContent = res.data.message;
            p.style = "color: green";
            incomeForm.appendChild(p);
            incomeForm.reset();
            setTimeout(() => {
                p.textContent = "";
            }, 2000);
    })
    .catch((error) => {
        alert(error.response.data.message);
    })

}

//Showing Summary 
const totalIncome = document.querySelector('#total-income');
const totalExpense = document.querySelector('#total-expense');
const balance = document.querySelector('#balance');

function render() {
    const mixedData = allData;

    let tempIncome = 0;
    let tempExpense = 0;

    const now = new Date();

    for (let i = 0; i < mixedData.length; i++) {
        const data = mixedData[i];
        const expenseDate = new Date(data.createdAt);

        // 🔥 FILTER LOGIC
        if (currentFilter === "daily") {
            if (expenseDate.toDateString() !== now.toDateString()) continue;
        }

        if (currentFilter === "weekly") {
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(now.getDate() - 7);

            if (expenseDate < oneWeekAgo || expenseDate > now) continue;
        }

        if (currentFilter === "monthly") {
            if (
                expenseDate.getMonth() !== now.getMonth() ||
                expenseDate.getFullYear() !== now.getFullYear()
            ) continue;
        }

        // 🔥 CALCULATION
        if (data.isIncome) {
            tempIncome += data.amount;
        } else {
            tempExpense += data.amount;
        }
    }

    const tempBalance = tempIncome - tempExpense;

    totalExpense.textContent = tempExpense;
    totalIncome.textContent = tempIncome;
    balance.textContent = tempBalance;
}

function setFilter(type) {
    const currentFilter = type;
    render();
}

//download report 
function getFilteredData() {
    const now = new Date();

    return allData.filter(data => {
        const d = new Date(data.createdAt);

        if (currentFilter === "daily") {
            return d.toDateString() === now.toDateString();
        }

        if (currentFilter === "weekly") {
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(now.getDate() - 7);
            return d >= oneWeekAgo && d <= now;
        }

        if (currentFilter === "monthly") {
            return (
                d.getMonth() === now.getMonth() &&
                d.getFullYear() === now.getFullYear()
            );
        }

        return true;
    });
}

function convertToCSV(data) {
    const header = ["Amount", "Type", "Date"];

    const rows = data.map(item => [
        item.amount,
        item.isIncome ? "Income" : "Expense",
        new Date(item.createdAt).toLocaleString()
    ]);

    const csvContent = [header, ...rows]
        .map(row => row.join(","))
        .join("\n");

    return csvContent;
}

function downloadCSV() {
    const filteredData = getFilteredData();
    const csv = convertToCSV(filteredData);

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `report-${currentFilter}.csv`;
    a.click();

    URL.revokeObjectURL(url);
}

//pagination 
let currentPage = 1;
const itemsPerPage = 8;

function getPaginatedData(data) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return data.slice(startIndex, endIndex);
}

function nextPage() {
    const totalPages = Math.ceil(allData.length / itemsPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        getAllExpenses();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        getAllExpenses();
    }
}




incomeForm.addEventListener('submit', handleFormSubmitForIncome);




window.addEventListener("DOMContentLoaded", getAllExpenses);



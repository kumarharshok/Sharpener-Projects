const chatMessageArea = document.querySelector("#chat-message-area");
const rcvMessage = document.querySelector(".receive");
const sendMessage = document.querySelector(".sent");
const messageInput = document.querySelector('#input-msg');
const sendButton = document.querySelector('#send-btn')

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

const API_URL = "http://localhost:4000/chats";
const socket = io("http://localhost:4000");

socket.on("receive_message", (data) => {
    addMessageToUI(data);
})

function addMessageToUI(person) {
    const div = document.createElement("div");

    if (currentUserId == person.userId) {
        div.className = "sent";
    } else {
        div.className = "receive";
    }

    div.textContent = person.message;

    const span = document.createElement("span");
    span.textContent = new Date().toLocaleTimeString();

    div.appendChild(span);
    chatMessageArea.appendChild(div);

    chatMessageArea.scrollTo({
        top: chatMessageArea.scrollHeight,
        behavior: "smooth"
    });
}


sendButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (messageInput.value == "") return;

    const newMessage = {
        message: messageInput.value.trim()    
    }
    axios.post(API_URL, newMessage, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((res) => {
            socket.emit("send_message", newMessage);
            messageInput.value = "";
        })
        .catch((error) => {
            alert(error.response.data.message);
        })
})

const currentUserId = user.id;
function getAllMessages() {
    axios.get(API_URL, {
    headers: {
        Authorization:  `Bearer ${token}`
    }
})
    .then((res) => {
        const allMessages = res.data.data;
        chatMessageArea.innerHTML = "";
        for(let i = 0; i < allMessages.length; i++) {
           addMessageToUI(allMessages[i]);
        }
        chatMessageArea.scrollTo({
                    top: chatMessageArea.scrollHeight,
                    behavior: "smooth"
                });
    })
    .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
    })
}

getAllMessages();

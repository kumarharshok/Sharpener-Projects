const chatMessageArea = document.querySelector("#chat-message-area");
const messageInput = document.querySelector('#input-msg');
const sendButton = document.querySelector('#send-btn')

const user = JSON.parse(localStorage.getItem("user"));

const API_URL = "http://localhost:4000/chats"
const socket = io("http://localhost:4000");

socket.on("receive_message", (data) => {
    console.log("New message:", data);

    if(data.userId == user.id) return;

    renderMessage({
        ...data,
        createdAt: new Date()
    });
 
});

sendButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (messageInput.value == "") return;

    const newMessage = {
        message: messageInput.value.trim(),
        userId: user.id
    }
    axios.post(API_URL, newMessage)
        .then((res) => {

            renderMessage({
        ...newMessage,
        createdAt: new Date()
    });
    
            socket.emit("send_message", newMessage);
            messageInput.value = "";
        })
        .catch((error) => {
            alert(error.response.data.message);
        })
})

const currentUserId = user.id;
function getAllMessages() {
    axios.get(API_URL)
    .then((res) => {
        const allMessages = res.data.data;
        chatMessageArea.innerHTML = "";

        for(let i = 0; i < allMessages.length; i++) {
            renderMessage(allMessages[i]);
        }
    })
    .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
    })
}

getAllMessages();

function renderMessage(person) {

    const div = document.createElement("div");

    if(person.userId == currentUserId) {
        div.className = "sent";
    } else {
        div.className = "receive";
    }

    div.textContent = person.message;

    const span = document.createElement("span");
    span.textContent = new Date(person.createdAt).toLocaleTimeString();

    div.appendChild(span);

    chatMessageArea.appendChild(div);

    chatMessageArea.scrollTo({
        top: chatMessageArea.scrollHeight,
        behavior: "smooth"
    });
}

const chatMessageArea = document.querySelector("#chat-message-area");
const rcvMessage = document.querySelector(".receive");
const sendMessage = document.querySelector(".sent");
const messageInput = document.querySelector('#input-msg');
const sendButton = document.querySelector('#send-btn')


const API_URL = "http://localhost:4000/chats"

const user = JSON.parse(localStorage.getItem("user"));

sendButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (messageInput.value == "") return;

    const newMessage = {
        message: messageInput.value.trim(),
        userId: user.id
    }
    axios.post(API_URL, newMessage)
        .then((res) => {
            const div = document.createElement("div");
            div.className = "sent";
            div.textContent = messageInput.value;
            chatMessageArea.appendChild(div);
            const span = document.createElement("span")
            span.textContent = new Date().toLocaleTimeString();
            div.appendChild(span);
            chatMessageArea.scrollTo({
                top: chatMessageArea.scrollHeight,
                behavior: "smooth"
            });
            messageInput.value = "";
        })
        .catch((error) => {
            alert(error.response.data.message);
        })
})


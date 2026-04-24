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

const currentUserId = user.id;
function getAllMessages() {
    axios.get(API_URL)
    .then((res) => {
        const allMessages = res.data.data;

        for(let i = 0; i < allMessages.length; i++) {
            const person = allMessages[i];
            const sendDiv = document.createElement("div");
            sendDiv.className = "sent";
            const rcvDiv = document.createElement("div");
            rcvDiv.className = "receive";

            if(currentUserId == person.userId) {
                sendDiv.textContent = person.message;
                chatMessageArea.appendChild(sendDiv);
                const span = document.createElement("span")
                span.textContent = new Date(person.createdAt).toLocaleTimeString();
                sendDiv.appendChild(span);
                const userIdSpan = document.createElement("span")
                userIdSpan.textContent = `userId: ${person.userId}`;
                sendDiv.appendChild(userIdSpan);
                chatMessageArea.scrollTo({
                    top: chatMessageArea.scrollHeight,
                    behavior: "smooth"
                });
            } else {
                rcvDiv.textContent = person.message;
                chatMessageArea.appendChild(rcvDiv);
                const span = document.createElement("span")
                span.textContent = new Date(person.createdAt).toLocaleTimeString();
                rcvDiv.appendChild(span);
                const userIdSpan = document.createElement("span")
                userIdSpan.textContent = `userId: ${person.userId}`;
                rcvDiv.appendChild(userIdSpan);
                chatMessageArea.scrollTo({
                    top: chatMessageArea.scrollHeight,
                    behavior: "smooth"
                });
            }
        }
    })
    .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
    })
}

getAllMessages();


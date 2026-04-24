const chatMessageArea = document.querySelector("#chat-message-area");
const rcvMessage = document.querySelector(".receive");
const sendMessage = document.querySelector(".sent");
const messageInput = document.querySelector('#input-msg');
const sendButton = document.querySelector('#send-btn')


sendButton.addEventListener("click", (event) => {
    event.preventDefault();
    if(messageInput.value == "") return;

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
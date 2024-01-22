// Client-side code using JavaScript
const form = document.getElementById('form');
form.addEventListener('submit', sendMessage);

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    displaymessage(`you are con
    nected ${socket.id}`);
});

socket.on('recived', message => {
    sendMessage(message);
});

function displaymessage(message) {
    var chatMessages = document.getElementById('chat-messages');
    chatMessages.append(message);
}

function sendMessage(e) {
    e.preventDefault();
    var messageInput = document.getElementById('messageInput');
    var chatMessages = document.getElementById('chat-messages');

    if (messageInput.value.trim() !== '') {
        var messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'sender');

        var messageBubble = document.createElement('div');
        messageBubble.classList.add('message-bubble', 'message-sent');
        messageBubble.textContent = messageInput.value;
        messageDiv.appendChild(messageBubble);
        chatMessages.appendChild(messageDiv);

        socket.emit('send', messageInput.value);

        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

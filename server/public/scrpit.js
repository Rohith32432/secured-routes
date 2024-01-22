// Client-side code using JavaScript
const form = document.getElementById('form');
form.addEventListener('submit', sendMessage);

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    displaymessage(`you are con
    nected ${socket.id}`);
});

socket.on('recived', message => {
    console.log(message);
   crreatemsg(message)
});

function displaymessage(message) {
    var chatMessages = document.getElementById('chat-messages');
    chatMessages.append(message);
}
function crreatemsg(msg){
    var chatMessages = document.getElementById('chat-messages');
    var messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'sender');
    var messageBubble = document.createElement('div');
    messageBubble.classList.add('message-bubble', 'message-sent');
    messageBubble.textContent = msg;
    messageDiv.appendChild(messageBubble);
    chatMessages.appendChild(messageDiv);
}

function sendMessage(e) {
    e.preventDefault();
    var messageInput = document.getElementById('messageInput');
    var roominput = document.getElementById('roominput');

    if (messageInput.value.trim() !== '') {
      crreatemsg(messageInput.value)
        
        socket.emit('send', messageInput.value,roominput.value);
        
        
        messageInput.value = '';

    }
}

// client.js
let username;
const ws = new WebSocket('ws://localhost:3000');

function joinChat() {
  username = document.getElementById('username').value.trim();
  if (!username) {
    alert('Please enter your username to join the chat.');
    return;
  }

  document.getElementById('username-container').style.display = 'none';
  document.getElementById('chat').style.display = 'block';
  appendMessage('Connecting to server...');
  ws.send(JSON.stringify({ type: 'join', username }));
}

ws.onopen = function () {
  console.log('Connected to server');
};

ws.onmessage = function (event) {
  const data = JSON.parse(event.data);
  if (data.type === 'message') {
    appendMessage(data.username + ': ' + data.message, 'right');
  } else if (data.type === 'system') {
    appendMessage('Server: ' + data.message, 'left');
  }
};

ws.onerror = function (error) {
  console.error('WebSocket error:', error);
  alert('WebSocket error occurred. Please refresh the page.');
};

function sendMessage() {
  const input = document.getElementById('message');
  const message = input.value.trim();
  if (message) {
    ws.send(JSON.stringify({ type: 'message', message }));
    appendMessage('You: ' + message, 'right');
    input.value = '';
  }
}

function appendMessage(message, align) {
  const messages = document.getElementById('messages');
  const div = document.createElement('div');
  div.textContent = message;
  div.classList.add('message', align);
  messages.appendChild(div);
}

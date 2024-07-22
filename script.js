let username;

function joinChat() {
    const usernameInput = document.getElementById('username-input');
    username = usernameInput.value.trim();
    
    if (username) {
        document.getElementById('landing-page').style.display = 'none';
        document.getElementById('chat-container').style.display = 'block';
        
        // Display the "user has joined" message in the chat
        const joinMessage = document.createElement('div');
        joinMessage.textContent = `${username} vachesadu`;
        joinMessage.style.fontStyle = 'italic';
        joinMessage.style.color = '#555';  // Optional styling for the join message
        chatBox.appendChild(joinMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    } else {
        alert('Please enter your name before joining the chat.');
    }
}

const chatBox = document.getElementById('chat-box');

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${username}: ${message}`;
        chatBox.appendChild(messageElement);
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function uploadPhoto(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '100%';
            img.style.maxHeight = '100px';
            chatBox.appendChild(img);
            chatBox.scrollTop = chatBox.scrollHeight;
        };
        reader.readAsDataURL(file);
    }
}

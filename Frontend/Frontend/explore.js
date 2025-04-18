const chatContainer = document.getElementById('chat-container');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const micBtn = document.getElementById('mic-btn');
const typingIndicator = document.getElementById('typing-indicator');
const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');
const historyBtn = document.getElementById('history-btn');
const profileBtn = document.getElementById('profile-btn');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');

// Dropdown menu toggle
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle('show');
});

// Close dropdown on outside click
document.addEventListener('click', () => {
  dropdownMenu.classList.remove('show');
});

dropdownMenu.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Optional profile button
if (profileBtn) {
  profileBtn.addEventListener('click', () => {
    alert('Profile page would open here');
    dropdownMenu.classList.remove('show');
  });
}

// History button
historyBtn.addEventListener('click', () => {
  alert('Chat history would open here');
  dropdownMenu.classList.remove('show');
});

// Dark Mode Toggle
const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  darkModeIcon.classList.remove('fa-moon');
  darkModeIcon.classList.add('fa-sun');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
  darkModeIcon.classList.remove('fa-sun');
  darkModeIcon.classList.add('fa-moon');
  localStorage.setItem('darkMode', 'disabled');
};

// Load dark mode from storage
if (localStorage.getItem('darkMode') === 'enabled') {
  enableDarkMode();
}

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.body.classList.contains('dark-mode')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
    dropdownMenu.classList.remove('show');
  });
}

// Bot response logic
const getBotResponse = (userMessage) => {
  const lowerMsg = userMessage.toLowerCase();
  if (lowerMsg.includes('hi') || lowerMsg.includes('hello') || lowerMsg.includes('hey')) {
    return "Hello there! How can I help you today?";
  } else if (lowerMsg.includes('woke up') || lowerMsg.includes('just woke')) {
    return "Good morning! 🌞 Ready to start your day?";
  } else if (lowerMsg.includes('plan') || lowerMsg.includes('today')) {
    return "What would you like to accomplish today? I'm happy to help you plan!";
  } else if (lowerMsg.includes('meditation') || lowerMsg.includes('meditate')) {
    return "Meditation is wonderful for mindfulness! 🧘‍♂️ Would you like a 5-minute guided session?";
  } else if (lowerMsg.includes('no thanks') || lowerMsg.includes('no thank')) {
    return "No problem at all! Let me know if you change your mind.";
  } else {
    const genericResponses = [
      "That's interesting! Tell me more.",
      "I'd love to hear more about that.",
      "How does that make you feel?",
      "Would you like to explore this topic further?",
      "That's a great perspective!",
      "I'm here to chat about whatever's on your mind."
    ];
    return genericResponses[Math.floor(Math.random() * genericResponses.length)];
  }
};

// Send user message
const sendMessage = () => {
  const messageText = messageInput.value.trim();
  if (messageText === '') return;

  addMessage(messageText, 'user');
  messageInput.value = '';

  typingIndicator.style.display = 'inline-block';
  chatContainer.scrollTop = chatContainer.scrollHeight;

  setTimeout(() => {
    typingIndicator.style.display = 'none';
    const botResponse = getBotResponse(messageText);
    addMessage(botResponse, 'bot');
  }, 1000 + Math.random() * 1500);
};

// Append message
const addMessage = (text, sender) => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', `${sender}-message`);
  messageElement.textContent = text;
  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
};

// Event listeners
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

micBtn.addEventListener('click', () => {
  alert('Voice input would activate here');
});

messageInput.focus();

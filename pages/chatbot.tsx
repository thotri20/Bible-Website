import React, { useState } from 'react';

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input) return;

    setMessages((prev) => [...prev, `You: ${input}`, `Bot: Searching for ${input}...`]);
    setInput('');
  };

  return (
    <div>
      <h1>Bible Chatbot</h1>
      <div>
        {messages.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask the chatbot..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatbotPage;

import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: "Hi, how can I help you?",
      type: "receive",
      owner: "boot",
    },
    {
      id: 2,
      message: "Im looking for a new website",
      type: "send",
      owner: "user",
    },
    {
      id: 3,
      message: "Yes, I know some good developers",
      type: "receive",
      owner: "boot",
    },
    {
      id: 4,
      message: "Can you give me some information?",
      type: "send",
      owner: "user",
    },
    {
      id: 5,
      message: "Yes, I can",
      type: "receive",
      owner: "boot",
    },
    {
      id: 1,
      message: "Hi, how can I help you?",
      type: "receive",
      owner: "boot",
    },
    {
      id: 2,
      message: "Im looking for a new website",
      type: "send",
      owner: "user",
    },
    {
      id: 3,
      message: "Yes, I know some good developers",
      type: "receive",
      owner: "boot",
    },
    {
      id: 4,
      message: "Can you give me some information?",
      type: "send",
      owner: "user",
    },
    {
      id: 5,
      message: "Yes, I can",
      type: "receive",
      owner: "boot",
    },
    {
      id: 1,
      message: "Hi, how can I help you?",
      type: "receive",
      owner: "boot",
    },
    {
      id: 2,
      message: "Im looking for a new website",
      type: "send",
      owner: "user",
    },
    {
      id: 3,
      message: "Yes, I know some good developers",
      type: "receive",
      owner: "boot",
    },
    {
      id: 4,
      message: "Can you give me some information?",
      type: "send",
      owner: "user",
    },
    {
      id: 5,
      message: "Yes, I can",
      type: "receive",
      owner: "boot",
    },
    {
      id: 1,
      message: "Hi, how can I help you?",
      type: "receive",
      owner: "boot",
    },
    {
      id: 2,
      message: "Im looking for a new website",
      type: "send",
      owner: "user",
    },
    {
      id: 3,
      message: "Yes, I know some good developers",
      type: "receive",
      owner: "boot",
    },
    {
      id: 4,
      message: "Can you give me some information?",
      type: "send",
      owner: "user",
    },
    {
      id: 5,
      message: "Yes, I can",
      type: "receive",
      owner: "boot",
    },
  ]);
  const [message, setMessage] = useState("");

  const scrollToBottomMessage = () => {
    const chatConversation = document.querySelector(".chat-conversation");
    chatConversation.scrollTop = chatConversation.scrollHeight;
  };

  // write a message
  const newMessage = (msg) => {
    setMessages([...messages, msg]);
    setMessage("");

    // wait a 500ms and scroll
    setTimeout(() => {
        scrollToBottomMessage();
    }, 100);
  };

  const sendMessage = (e) => {
    // scroll to the bottom of the chat
    newMessage({ message, type: "send", owner: "user" });
  };

  return (
    <>
      <div className="chat">
        <div className="chat-container">
          <div className="chat-header">
            <h1>Chat</h1>
          </div>
          <div className="chat-body">
            <div className="chat-conversation">
              <button
                className="chat-btn-scroll-to-bottom"
                onClick={scrollToBottomMessage}
              >
                Scroll to bottom
              </button>
              {messages.map((e, i) => (
                <div className="chat-message receiver-user">
                  <div className="chat-message-container">
                    <div className="user-avatar">
                      <img src="https://i.imgur.com/7YI3zqX.png" alt="user" />
                    </div>
                    <div className="chat-message-content">
                      <p>{e.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="chat-form">
              <div className="chat-form-container">
                <div className="chat-form-content">
                  <input
                    type="text"
                    placeholder="Type a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e)=>e.key==="Enter"?sendMessage():null}
                  />

                  <button className="chat-btn-send" onClick={sendMessage}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

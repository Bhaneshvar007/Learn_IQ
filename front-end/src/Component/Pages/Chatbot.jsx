import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    // Function to handle message submission
    const handleSendMessage = async () => {
        if (input.trim() === "") return;

        // Add the user message to the chat
        const userMessage = { role: "user", content: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        try {
            // Make an API call to get the chatbot response
            const response = await axios.post("http://localhost:3000/api/chat", {
                message: input,
            });

            // Add the chatbot's response to the chat
            const botMessage = { role: "bot", content: response.data.reply };
            setMessages((prevMessages) => [...prevMessages, botMessage]);

            // Clear the input field
            setInput("");
        } catch (error) {
            console.error("Error communicating with chatbot:", error);
            const errorMessage = {
                role: "bot",
                content: "Sorry, there was an error. Please try again later.",
            };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
                <div className="h-64 overflow-y-auto mb-4 border border-gray-300 rounded p-2">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`mb-2 p-2 rounded ${msg.role === "user"
                                ? "bg-blue-100 text-right"
                                : "bg-gray-100 text-left"
                                }`}
                        >
                            {msg.content}
                        </div>
                    ))}
                </div>
                <div className="flex items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-grow p-2 border border-gray-300 rounded mr-2"
                        placeholder="Type your message..."
                    />
                    <button
                        onClick={handleSendMessage}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;

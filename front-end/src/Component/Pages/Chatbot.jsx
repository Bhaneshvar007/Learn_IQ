import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false); // Toggle for chatbot visibility

    const handleSendMessage = async () => {
        if (input.trim() === "") return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);

        try {
            const response = await axios.post("http://localhost:3000/api/chat", { message: input });
            const botMessage = { role: "bot", content: response.data.result };
            setMessages((prev) => [...prev, botMessage]);
            setInput("");
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { role: "bot", content: "Sorry, there was an error. Please try again later." },
            ]);
        }
    };

    return (
        <div className="">
            {/* Chatbot Icon */}
            {!isOpen && (
                <img
                    src="https://cdn-icons-png.flaticon.com/512/8943/8943377.png"
                    alt="Chatbot Icon"
                    className="fixed bottom-4 right-4 w-16 h-16 cursor-pointer z-50"
                    style={{ cursor: "pointer" }} // Ensure cursor is set to pointer
                    onClick={() => setIsOpen(true)}
                />

            )}

            {/* Chatbot Window */}
            <div
                    className={`fixed bottom-20 right-10 w-80 h-96 bg-white shadow-lg border-2 border-purple-500 rounded-lg z-40 transform transition-transform duration-500 ${isOpen ? "visible scale-100" : "hidden scale-90"
                    }`}
            >
                {isOpen && (
                    <>
                        {/* Chatbot Header */}
                        <div className="flex items-center justify-between bg-purple-600 text-white p-2 rounded-t">
                            <h2 className="text-lg font-bold">Welcome to E-Learn AI</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white text-lg hover:text-gray-200"
                            >
                                ✖
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex flex-col h-full mt-2 ">
                            <div className="flex-grow overflow-y-auto border border-gray-300 rounded p-2 m-2">
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

                            {/* Message Input */}
                            <div className="flex mt-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="flex-grow p-2 border-2 border-purple-500 rounded mr-2"
                                    placeholder="Type your message..."
                                />
                                <button
                                    onClick={handleSendMessage}
                                    className="px-4 py-2 bg-purple-600 text-white rounded duration-500 hover:bg-purple-700"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Chatbot;

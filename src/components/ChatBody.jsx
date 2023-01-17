import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody =({messages}) => {
    const navigate = useNavigate();
    const leaveChat = () => {
        localStorage.removeItem("userName");
        navigate('/');
        window.location.reload();
    };

    return <>
        <div className="chat-box">
            <header className="chat-header">
                <span>Socket IO chat</span>
                <button className="signOutBtn" onClick={leaveChat}>Sign out</button>
            </header>
            {messages.map(message => (
                <div className="chat-messages">
                    <p>{message.userName}</p>
                    <p>{message.message}</p>
                </div>
                
            ))}
        </div>
    </>
}
 export default ChatBody
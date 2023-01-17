import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody =({messages, socket, users, setUsers}) => {
    const navigate = useNavigate();

    const leaveChat = () => {
        const userName = localStorage.getItem("userName");
        setUsers(users.filter(user => user.userName !== userName))
        localStorage.removeItem("userName");
        socket.emit("removeUser",socket.id);
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
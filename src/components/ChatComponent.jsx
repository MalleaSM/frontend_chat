import React, { useEffect, useState } from "react";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import ChatSideBar from "./ChatSideBar";

const ChatComponent =({socket}) => {
    const [messages,setMessages] = useState([]);
    const [users,setUsers] = useState([]);
    useEffect(() => {
        socket.on("messageResponse", data => setMessages([...messages,data]));
    },[messages,socket]);

    return (
        <div className="chat-container">
            <div className="sideBar">
                <ChatSideBar socket ={socket} users={users} setUsers={setUsers}/>    
            </div>
            <div className="chat">
                <ChatBody messages={messages} socket={socket} users={users} setUsers={setUsers}/>
                <ChatFooter socket={socket}/>
            </div>
        </div>
    )
}
 export default ChatComponent
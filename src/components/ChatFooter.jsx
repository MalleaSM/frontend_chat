import React, { useCallback, useEffect, useState } from "react";

const ChatFooter = ({socket}) => {
    const [message, setMessage] = useState("");
    useEffect(()=>{
        socket.on("messageResponse", data => console.log("this is the message from server: ", data))
    },[message,socket])

const typingHandler = () =>{
    console.log("typing");
    socket.emit("typing",{
        userName: localStorage.getItem("userName"),
    });
}
const handleSendMessage = useCallback((e) => {
        e.preventDefault();
        typingHandler();
        if(message.trim()){
            socket.emit("message",{
                message: message,
                userName: localStorage.getItem("userName"),
                id: `${socket.id}`,
                socketId: socket.id
            });
            setMessage("");
        }
        else{
            typingHandler();   
        }
    },[message,socket])
    
    return (
        <div>
            <form onSubmit={handleSendMessage}>
                <input
                className="message-input"  
                type="text" 
                placeholder="Write your message" 
                value={message} 
                onChange={e => setMessage(e.target.value)}
                />
                <button>Send</button>
            </form>
        </div>
    )
}

export default ChatFooter
import React, { useEffect, useState } from "react";

const ChatSideBar = ({socket, users, setUsers}) => {
    
    useEffect(() => {
        socket.on('newUserResponse', (data) => setUsers(data));
    },[socket, users]);
    return (
        <div>
            <h3>Users</h3>
            <div>
                {users.map((user) => (
                     <p key={user.id}>{user.userName}</p>
                ))}
            </div>
        </div>
    )
}
export default ChatSideBar
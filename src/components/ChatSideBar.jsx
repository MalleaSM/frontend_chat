import React, { useEffect, useState } from "react";

const ChatSideBar = ({socket}) => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        socket.on('newUserResponse', (data) => setUsers(data));
        console.log("user response: " + users);
    },[socket, users]);
    return (
        <div>
            <h3>Users</h3>
            <div>
                {users.map((user) => (
                     <p key={user.socketID}>{user.userName}</p>
                ))}
            </div>
        </div>
    )
}
export default ChatSideBar
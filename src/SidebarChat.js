import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
function SidebarChat({ addNewChat }) {
  const [seed, setseed] = useState("");
  useEffect(() => {
    setseed(Math.floor(Math.random() * 1000));
  }, []);
  const createChat = () => {
    const roomName = prompt("Please enter room name");
    if (roomName) {
    }
  };
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/4.5/api/male/${seed}.svg`} />
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>Last message</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;

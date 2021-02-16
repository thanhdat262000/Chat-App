import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVertOutlined";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import db from "./firebase";
function Chat(props) {
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  console.log(roomId);
  const [roomName, setRoomName] = useState("");
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomName(snapshot.data().name);
        });
    }
    return () => {};
  }, [roomId]);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at </p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message chat_receiver">
          <span className="chat_name">Dat</span>Hello
          <span className="chat_timestamp">3:34</span>{" "}
        </p>
      </div>

      <div className="chat_footer">
        <InsertEmotionIcon />
        <form>
          <input
            placeholder="Type a message"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage}> Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;

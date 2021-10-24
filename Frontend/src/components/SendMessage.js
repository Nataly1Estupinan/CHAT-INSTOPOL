import React, { useContext, useState } from "react";

import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import { SocketContext } from "../context/SocketContext";

export const SendMessage = () => {
  const [message, setMessage] = useState("");

  const { socket } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext);

  const onChange = ({ target }) => {
    setMessage(target.value);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    if (message.length === 0) {
      return;
    }
    console.log(message);
    setMessage("");

    // TODO: Emitir un evento de sockets para enviar el message
    // {
    //     de: // UID del usuario enviando el message
    //     para: // UID del usuario que recibe el message
    //     message: // lo que quiero enviar
    // }
    socket.emit("personal-message", {
      from: auth.uid,
      to: chatState.activeChat,
      message,
    });

    // TODO: hacer el dispatch de el message...
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
          <input
            type="text"
            className="write_msg"
            placeholder="message..."
            value={message}
            onChange={onChange}
          />
        </div>
        <div className="col-sm-3 text-center">
          <button className="msg_send_btn mt-3" type="submit">
            enviar
          </button>
        </div>
      </div>
    </form>
  );
};

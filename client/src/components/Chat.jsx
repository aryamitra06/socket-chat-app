import React from 'react'
import io from "socket.io-client";
import Input from './Input';
import MessagesContainer from './MessagesContainer';
import RoomInfo from './RoomInfo';

let socket;

const Chat = ({ name, room }) => {
  const [users, setUsers] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const ENDPOINT_WS = "localhost:5000";

  React.useEffect(() => {
    socket = io(ENDPOINT_WS);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
    socket.on('message', message => {
      setMessages(messages => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);


  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-12 col-md-8 col-lg-5 col-xl-5">
            <RoomInfo users={users} room={room} />
            <MessagesContainer messages={messages} name={name}/>
            <Input message={message} sendMessage={sendMessage} setMessage={setMessage} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './components/Chat';
import Join from "./components/Join";

function App() {
  const [name, setName] = React.useState("");
  const [room, setRoom] = React.useState("");
  const Navbar = () => {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <p className="navbar-brand m-0 p-0">🗨️ Chatify</p>
        </div>
      </nav>
    )
  }
  return (
    <BrowserRouter>
      {Navbar()}
      <Routes>
        <Route exact path="/" element={<Join room={room} name={name} setRoom={setRoom} setName={setName} />} />
        <Route exact path="/chat" element={<Chat room={room} name={name} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
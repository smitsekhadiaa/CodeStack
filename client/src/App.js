import './App.css';
import Login from './login';
import io from "socket.io-client";
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignUp from './signup';
import UserContext,{socket} from './usercontext';
import MainPage from './qaSection/MainPage';
function App() {
  const [user, setuser] = useState(null);
  const [deluxe, setDeluxe] = useState({});
  const [joinJoined, setJoinJoined] = useState(null);
  const [remJoinChat, setRemJoinChat] = useState(true);
  const [messageList, setMessageList] = useState([]);
  const [color, setColor] = useState(0);
 


  return (
    <BrowserRouter>
      {(socket !== undefined) ?


        <UserContext.Provider value={{ user, setuser, deluxe, setDeluxe, joinJoined, setJoinJoined, remJoinChat, socket, setRemJoinChat, messageList, setMessageList, color, setColor }}>
          <Routes>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={< Login />} />
            <Route path="/qaSection" element={<MainPage />} />
          </Routes>
        </UserContext.Provider> : <div></div>}
    </BrowserRouter>
  );
}

export default App;

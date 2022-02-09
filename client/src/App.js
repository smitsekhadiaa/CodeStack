
import './App.css';
<<<<<<< HEAD
import Header from './Header';
import Home from './Home';
=======
import Homepage from './Homepage';
>>>>>>> eaeb3d7c6634c6bcd60d0279d189eb846cdb1892
import Cprogg from './Cprogg';
import CPPprogg from './CPPprogg';
import Javaprogg from './Javaprogg';
import Pythonprogg from './Pythonprogg';
import DSA from './DSA';
import Dbms from './Dbms';
<<<<<<< HEAD
=======
import './App.css';
import Main from './Main';
import Login from './login';
import io from "socket.io-client";
import AuthRequired from './AuthRequired';
import { useEffect, useState } from 'react';
// import HomeCarousel from "./HomeCarousel";
>>>>>>> eaeb3d7c6634c6bcd60d0279d189eb846cdb1892
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
<<<<<<< HEAD
=======
import SignUp from './signup';
import UserContext, { socket } from './usercontext';
import MainPage from './qaSection/MainPage';
>>>>>>> eaeb3d7c6634c6bcd60d0279d189eb846cdb1892
function App() {
  const [user, setuser] = useState(null);
  const [deluxe, setDeluxe] = useState({});
  const [joinJoined, setJoinJoined] = useState(null);
  const [remJoinChat, setRemJoinChat] = useState(true);
  const [messageList, setMessageList] = useState([]);
  const [color, setColor] = useState(0);


  return (
    <div>
<<<<<<< HEAD
  <Header title="CodeStack"/>   
  <BrowserRouter>
          <Routes>
            {<Route exact path="/" element={<Home />} />}
            {<Route path="/Cprogg" element={< Cprogg />} />}
            {<Route path="/CPPprogg" element={< CPPprogg />} />}
            {<Route path="/Javaprogg" element={< Javaprogg />} />}
            {<Route path="/Pythonprogg" element={< Pythonprogg />} />}
            {<Route path="/DSA" element={<DSA/>} />}
            {<Route path="/DBMS" element={<Dbms/>} />}
          </Routes>
        
    
    </BrowserRouter>
=======
      <BrowserRouter>
        {(socket !== undefined) ?


          <UserContext.Provider value={{ user, setuser, deluxe, setDeluxe, joinJoined, setJoinJoined, remJoinChat, socket, setRemJoinChat, messageList, setMessageList, color, setColor }}>
            <Routes>
              <Route exact path="/SignUp" element={<SignUp />} />
              <Route exact path="/" element={< Login />} />
              <Route exact path="/qaSection" element={(<MainPage />)} />
              <Route exact path="/Home" element={(<Homepage />)} />
              <Route exact path="/Cprogg" element={(< Cprogg />)} />
              <Route exact path="/CPPprogg" element={(< CPPprogg />)} />
              <Route exact path="/Javaprogg" element={(< Javaprogg />)} />
              <Route exact path="/Pythonprogg" element={(< Pythonprogg />)} />
              <Route exact path="/DSA" element={(<DSA />)} />
              <Route exact path="/DBMS" element={(<Dbms />)} />
              <Route exact path="/Main" element={(<Main />)} />
            </Routes>
          </UserContext.Provider> : <div></div>}
      </BrowserRouter>
>>>>>>> eaeb3d7c6634c6bcd60d0279d189eb846cdb1892
    </div>
  );
}

export default App;

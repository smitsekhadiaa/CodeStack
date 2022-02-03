
import './App.css';
import Header from './Header';
import Home from './Home';
import Cprogg from './Cprogg';
import CPPprogg from './CPPprogg';
import Javaprogg from './Javaprogg';
import Pythonprogg from './Pythonprogg';
import DSA from './DSA';
import Dbms from './Dbms';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;


import './App.css';
import Header from './Header';
import Home from './Home';
import Cprogg from './Cprogg';
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
  <Home/>  
  <BrowserRouter>
          <Routes>
            {<Route exact path="/" element={<Home />} />}
            {<Route path="/cprogg" element={< Cprogg />} />}
          </Routes>
        
    
    </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Groceries from "./Components/Groceries"
import Grooming from "./Components/Grooming"
import Stationary from "./Components/Stationary"
import Dairy from "./Components/Dairy"
import Snacks from "./Components/Snacks"
import Contact from "./Components/Contact"
import Cart from './Components/Cart';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Demo from './Components/demo';

function App() {
  return (
    <>
    <Router>
    
    <Navbar/>
    <div className="App">
    <Routes>
    
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/groceries" element={<Groceries/>}></Route>
    <Route exact path="/grooming" element={<Grooming/>}></Route>
    <Route exact path="/stationary" element={<Stationary/>}></Route>
    <Route exact path="/dairy" element={<Dairy/>}></Route>
    <Route exact path="/snacks" element={<Snacks/>}></Route>
    <Route exact path="/contact" element={<Contact/>}></Route>
    <Route exact path="/cart" element={<Cart/>}></Route>
    
    </Routes>
    </div>
    </Router>
    </>
    
  );
}

export default App;

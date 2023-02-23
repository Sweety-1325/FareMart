import logo from '../Images/logo.png';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {useLocation} from "react-router-dom"
import { Link } from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();
    let navigate=useNavigate();
    
    useEffect(() => {
      
    
    }, [location])
  return (
    <div >
      <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:"#9ae6bb"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="FARE+MART" style={{width:"40px", maxheight:"100% ",objectFit: "contain"}} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/'?"active":""}}`} aria-current="page" to="/">
                  <h6>Home</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/groceries'?"active":""}}`} to="/groceries">
                  <h6>Groceries</h6>
                </Link>
              </li>
              <li className="nav-item">
            
                <Link className={`nav-link ${location.pathname==='/grooming'?"active":""}}`} to="/grooming">
                  <h6>Grooming</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/stationary'?"active":""}}`} to="/stationary">
                  <h6>Stationary</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/dairy'?"active":""}}`} to="/dairy">
                  <h6>Dairy Products</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/snacks'?"active":""}}`} to="/snacks">
                  <h6>Snacks</h6>
                </Link>
              </li>
              
              
              
            </ul>
            <div className='mx-2'>            
              <i className="fa-sharp fa-solid fa-phone-volume mx-4"  onClick={()=>{navigate("/contact");}} style={{cursor:"pointer",alignItems:"center"}}></i>
            <h6>Contact Us</h6></div>
            <div>

            <i className="fa-solid fa-cart-shopping mx-4" onClick={()=>{navigate("/cart");}} style={{cursor:"pointer",alignItems:"center"}}></i>
            <h6>Your Cart</h6>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

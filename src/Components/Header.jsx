import pic from "../Images/Tasty Tadka.jpg";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img className="logo" src={pic} alt="tastytadka Logo" />
  </a>
);



 
// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      
      <img className="img" src={pic} alt="logo" />
      <div className="nav-items">
     

        
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
         
         
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <p>Vennligst velg en av følgende:</p>
            <ul>
                <li>
                <Link to="/gameshop">Visit Shop</Link>
                </li>
                <li>
                <Link to="/mygames">Go to library</Link>
                </li>
                <li>
                <Link to="/myfavourites">Go to favorites</Link>
                </li>
            </ul>
        </nav>
    );
  }
  
  
  export default Navbar;
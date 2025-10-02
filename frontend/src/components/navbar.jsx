import { Link } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="navbar-kontener">
              <Link to='/'>Home</Link>
              <Link to='/'>Belföldi Utazás</Link>
              <Link to='/'>Nemzetközi Utazás</Link>
              <Link to='/'>Ügyfészolgálat</Link>
              <Link to='/'>Késési biztosítás</Link>
    </div>
  );
};

export default Navbar;

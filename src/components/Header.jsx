import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
      <header className="header">
        <Link><h1>Zoo app</h1></Link>
        <span className="material-symbols-outlined">search</span>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/animals'>Animals</NavLink>
              <NavLink to='/birds'>Birds</NavLink>
              <NavLink to='/insects'>Insects</NavLink>
              <NavLink to='/fishes'>Fishes</NavLink>
              <NavLink to='/about'>About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
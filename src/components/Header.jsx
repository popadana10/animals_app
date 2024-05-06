import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
      <header className="header">
        <h1>Zoo app</h1>
        <span className="material-symbols-outlined">search</span>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/animals'>Animals</NavLink>
              <NavLink to='/birds'>Birds</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
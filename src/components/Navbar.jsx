import { Link } from "react-router-dom";
import '../Styles.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Cv">Cv</Link>
          </li>
          <li>
            <Link to="/Projects">Proyectos</Link>
          </li>
          <li>
            <Link to="/Newproject">Nuevo Proyecto</Link>
          </li>
          {/* Agrega más enlaces según sea necesario */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

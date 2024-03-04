import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

  
const Navbar = () => {
  const isLoggin = useSelector((state) => state.isLoggin);
  const user = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={`${styles.navbar_container} navbar navbar-expand-lg`}>
      <div className="container">
        <span className="navbar-brand">
          <Link to="/">
            <img
              src="./images/home/logo.png"
              className={styles.landplan_logo}
              alt="landplan"
            />
          </Link>
        </span>
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
        <div
          className="collapse navbar-collapse ps-lg-0 ps-4"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-lg-5">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link"   to="/savejobs">
                Save Jobs
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/dropshipping">
                Shop
              </NavLink>
            </li>
            {user?.additional?.role_id == "1" && (
              <li className="nav-item me-4">
                <NavLink className="nav-link" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>

          <div
            className="d-flex flex-lg-row flex-column pb-lg-0 pb-3"
            role="search"
          >
            <span
              className={`${styles.username} f-bolder pt-1 me-3 mb-lg-0 mb-3`}
            >
              {user?.additional?.name}
            </span>
            {isLoggin ? (
              <Link to="/login">
                <Button
                  text="LOGOUT"
                  type="authbtn me-lg-5 mb-lg-0 mb-3"
                  action={handleLogout}
                />
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button text="LOGIN" type="authbtn me-lg-5 mb-lg-0 mb-3" />
                </Link>
                <Link to="/signup">
                  <Button text="SIGN UP" type="authbtn" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

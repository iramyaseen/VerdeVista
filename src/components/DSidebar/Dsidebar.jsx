import styles from "./dsidebar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  IoCellularOutline,
  IoGridOutline,
  IoHomeOutline,
  IoLockClosedOutline,
  IoPersonOutline,
  IoWalletOutline
} from "react-icons/io5";
import dashboardLogo from "../../assets/dashboard/dashboard_logo.png";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";


const Dsidebar = ({ show, closeSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  
  return (
    <>
      <aside className={show ? `${styles.sidebar}` : `${styles.hidesidebar}`}>
        <span className={styles.close_dashboard_btn} onClick={closeSidebar}>
          X
        </span>

        {/* logo*/}
        <figure className={`text-center py-5 ${styles.dashboard_logo}`}>
          <img src={dashboardLogo} alt="landplan" className="me-3" />
        </figure>

        {/* sidebar menu */}  
        <div className={`${styles.sidbar_links}`}>
          <ul className="px-0">
            <li>
              <NavLink
                to="/dashboard/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.menu_item_active}`
                    : `${styles.menu_item}`
                }
              >
                <IoHomeOutline /> Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/packages"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.menu_item_active}`
                    : `${styles.menu_item}`
                }
              >
                <IoCellularOutline /> Packages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/products"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.menu_item_active}`
                    : `${styles.menu_item}`
                }
              >
                <IoGridOutline /> Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/users"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.menu_item_active}`
                    : `${styles.menu_item}`
                }
              >
                <IoPersonOutline /> Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/orders"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.menu_item_active}`
                    : `${styles.menu_item}`
                }
              >
                <IoLockClosedOutline /> Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/payments"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.menu_item_active}`
                    : `${styles.menu_item}`
                }
              >
                <IoWalletOutline /> Payments
              </NavLink>
            </li>
          </ul>
        </div>

        {/* logout button */}
        <div className={styles.logout_link}>
          <span onClick={handleLogout}>
            <IoLogOutOutline
              className="me-3"
              style={{ fontSize: "25px", cursor: "pointer" }}
              title="logout"
            />
            Logout{" "}
          </span>
        </div>
      </aside>
    </>
  );
};

export default Dsidebar;

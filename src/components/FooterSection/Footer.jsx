import GoogleAuthButton from "../Button/GoogleAuthButton";
import Button from "../Button/Button";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import axiosInstance from "../../../axiosConfig";
import { NotificationAlert } from "../NotificationAlert/NotificationAlert";
import { useState } from "react";


const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsLetter = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        const res = await axiosInstance.post(`/newsletter`, { email });
        if (res?.data?.status) {
          NotificationAlert(res?.data?.data, "success");
        }
      } catch (error) {
        console.log(error, "get error...");
        NotificationAlert(error.message, "warning");
      }
    } else {
      NotificationAlert("Email Required!", "warning");
    }
  };

  return (
    <footer>
      <div className={`${styles.download_app_section}`}>
        <div className="h-100 d-flex align-items-center justify-content-center flex-column">
          <h1 className="text-center f-bold text-theme-white ">
            Download Today for Free!
          </h1>
          <div className="mt-3">
            <Link to="" target="_blank" className="app_store_btn me-4">
              <img
                src="./images/home/googleplaystore.png"
                alt="googleplaystore"
              />
            </Link>

            <Link to="" target="_blank" className="app_store_btn">
              <img src="./images/home/appstore.png" alt="appstore" />
            </Link>
          </div>
        </div>
      </div>
      <div className={`${styles.main_footer} mt-5 py-5`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 text-lg-start text-center">
              <div className={styles.footer_links}>
                <ul className="px-0 description-text">
                  <li>
                    <span>Pages</span>
                  </li>
                  <li>
                    <Link to="/" className={styles.footer_link_item}>
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className={styles.footer_link_item}>
                      {" "}
                      About{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/savejobs" className={styles.footer_link_item}>
                      {" "}
                      Save Jobs{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className={styles.footer_link_item}>
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-lg-start text-center">
              <div className={styles.footer_links}>
                <ul className="px-0 description-text">
                  <li>
                    <span>Contact</span>
                  </li>
                  <li>
                    <a
                      href="tel:1000000000"
                      className={styles.footer_link_item}
                    >
                      {" "}
                      +1(000) 0000{" "}
                    </a>
                  </li>
                  <li>
                    <Link to="/" className={styles.footer_link_item}>
                      {" "}
                      www.landplan.com{" "}
                    </Link>
                  </li>
                  <li>
                    <a className={styles.footer_link_item}>Follow us</a>
                  </li>
                  <li>
                    <Link to="/" className={`${styles.footer_link_item} me-2`}>
                      <img
                        src="./images/footer/instagram2x.png"
                        width="30px"
                        alt=""
                      />
                    </Link>
                    <Link to="/" className={styles.footer_link_item}>
                      <img
                        src="./images/footer/facebook2x.png"
                        width="30px"
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 text-lg-start text-center mt-lg-0 mt-5">
              <div className={styles.footer_subscription_section}>
                <h2 className="mb-2">Subscribe to the Land Plan</h2>
                <GoogleAuthButton action={() => null} />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  id="inputEmail4"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  text="Subscribe"
                  type="login_btn mt-3"
                  action={handleNewsLetter}
                />
                <div className="mt-3 d-flex justify-content-evenly">
                  <Link
                    to=""
                    target="_blank"
                    className="app_store_btn_footer me-4"
                  >
                    <img
                      src="./images/home/googleplaystore.png"
                      alt="googleplaystore"
                    />
                  </Link>

                  <Link to="" target="_blank" className="app_store_btn_footer">
                    <img src="./images/home/appstore.png" alt="appstore" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import styles from "./contact.module.css";
import { useSelector } from "react-redux";
import axiosInstance from "../../../axiosConfig";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import Footer from "../../components/FooterSection/Footer";
import { NotificationAlert } from "../../components/NotificationAlert/NotificationAlert";


const index = () => {

  const isLoggin = useSelector((state) => state.isLoggin);
  const user = useSelector((state) => state.data);
  const [contactFields, setContactFields] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleContactForm = (e) => {
    if (isLoggin) {
      setContactFields({
        ...contactFields,
        ["first_name"]: user?.additional?.name.split(" ")?.[0],
        ["last_name"]: user?.additional?.name.split(" ")?.[1],
        ["email"]: user?.additional?.email,
        [e.target.name]: e.target.value,
      });
    } else {
      setContactFields({ ...contactFields, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      contactFields.first_name &&
      contactFields.last_name &&
      contactFields.email &&
      contactFields.message
    ) {
      try {
        const res = await axiosInstance.post(`/contactus`, contactFields);
        if (res?.data?.status) {
          NotificationAlert(res?.data?.data, "success");
        }
      } catch (error) {
        console.log(error);
        NotificationAlert(error.message, "warning");
      }
    } else {
      NotificationAlert("All Feilds Required!", "warning");
    }
  };

  return (
    <>
      <Navbar />
      <main className={styles.contact_wrapper}>
        <div className="container h-100 text-theme-white d-flex justify-content-center align-items-center flex-column text-center">
          <h1 className="f-bold banner-title-heading">Contact Us</h1>
          <h2 className="description-title f-bold">
            Lorem ipsum dolor sit amet ispum to world.
          </h2>
          <p className="description-text para-text px-5 mx-lg-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aut porro laboriosam aliquid voluptate deleniti sint sequi doloribus
            perspiciatis consequuntur.
          </p>
          <br />
          <span>
            <a>info@landplan.com</a>
          </span>
        </div>
      </main>
      <section className={styles.contact_form_container}>
        <div className={styles.contact_form_box}>
          <div className={`${styles.form_container} py-3`}>
            {isLoggin ? (
              <form className="row g-3">
                <h3>Contact Us</h3>
                <div className="col-lg-6">
                  <label
                    htmlFor="first_name1"
                    className="form-label text-light-gray"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    id="first_name1"
                    name="first_name"
                    value={user?.additional?.name.split(" ")?.[0]}
                    disabled
                  />
                </div>
                <div className="col-lg-6">
                  <label
                    htmlFor="last_name1"
                    className="form-label  text-light-gray"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    id="last_name1"
                    name="last_name"
                    value={user?.additional?.name.split(" ")?.[1]}
                    disabled
                  />
                </div>

                <div className="col-12">
                  <label
                    htmlFor="inputEmail4"
                    className="form-label  text-light-gray"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    id="inputEmail4"
                    name="email"
                    value={user?.additional?.email}
                    disabled
                  />
                </div>
                <div className="col-12">
                  <label
                    htmlFor="itextarea1"
                    className="form-label  text-light-gray"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="textarea1"
                    placeholder="Message"
                    rows="6"
                    name="message"
                    value={contactFields.message}
                    onChange={handleContactForm}
                  ></textarea>
                </div>
                <div className="col-12 text-center">
                  <Button
                    text="Send Now"
                    type="login_btn mt-3"
                    action={handleSubmit}
                  />
                </div>
              </form>
            ) : (
              
              <form className="row g-3">
                <h3>Contact Us</h3>
                <div className="col-lg-6">
                  <label
                    htmlFor="first_name1"
                    className="form-label text-light-gray"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    id="first_name1"
                    name="first_name"
                    value={contactFields.first_name}
                    onChange={handleContactForm}
                  />
                </div>
                <div className="col-lg-6">
                  <label
                    htmlFor="last_name1"
                    className="form-label  text-light-gray"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    id="last_name1"
                    name="last_name"
                    value={contactFields.last_name}
                    onChange={handleContactForm}
                  />
                </div>

                <div className="col-12">
                  <label
                    htmlFor="inputEmail4"
                    className="form-label  text-light-gray"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    id="inputEmail4"
                    name="email"
                    value={contactFields.email}
                    onChange={handleContactForm}
                  />
                </div>
                <div className="col-12">
                  <label
                    htmlFor="itextarea1"
                    className="form-label  text-light-gray"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="textarea1"
                    placeholder="Message"
                    rows="6"
                    name="message"
                    value={contactFields.message}
                    onChange={handleContactForm}
                  ></textarea>
                </div>
                <div className="col-12 text-center">
                  <Button
                    text="Send Now"
                    type="login_btn mt-3"
                    action={handleSubmit}
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;

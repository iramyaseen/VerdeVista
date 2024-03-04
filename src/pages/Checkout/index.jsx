import { useState } from "react";
import styles from "./checkout.module.css";
import { Link, useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import { AiOutlineLeft } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

const index = () => {
  const { state } = useLocation();
  console.log(state, "package data !!!");

  const [planText, setPlanText] = useState("Annual");
  const [checkoutFields, setCheckoutFields] = useState({
    plan: "Annual",
    payment_method: "",
    card_no: "",
    expiry: "",
    cvc: "",
  });

  const handleCheckoutFields = (e) => {
    setCheckoutFields({ ...checkoutFields, [e.target.name]: e.target.value });
  };

  const handlePlanToggle = (plan) => {
    setPlanText(plan);
    setCheckoutFields({ ...checkoutFields, ["plan"]: plan });
  };

  const handleCheckOut = (e) => {
    e.preventDefault();
    console.log(checkoutFields, "checkout fields..");
  };

  return (
    <div className={styles.checkout_layout_container}>
      <div className={`${styles.checkoutbox}`}>
        {/* checkout box header */}
        <div
          className={`${styles.checkoutbox_title_bar} d-flex justify-content-between align-items-center px-sm-5 px-3`}
        >
          <div className="d-flex ">
            <Link to="/" className={styles.link_angle}>
              <AiOutlineLeft />
            </Link>
            <span className={`${styles.link_angle_side_title}`}>
              {state?.category_name}
            </span>
          </div>
          <h2>
            Starter <FaCheckCircle className="mb-1" />
          </h2>
        </div>

        {/* checkout form */}
        <div className={`${styles.form_container}`}>
          <h2 className="text-center f-bolder">Complete Payment</h2>
          {/* Toggle Button  */}
          <form>
            <div className={styles.subcription_selection_toggle_box}>
              <div
                className={`${styles.prices_toggle_box} d-flex justify-content-between px-4 pt-2 text-center text-light`}
              >
                <span onClick={() => handlePlanToggle("Annual")}>
                  <small>Annual</small>
                  <br />
                  <span className={`f-bolder ${styles.plan_price} `}>
                    ${(state?.price * 12)?.toFixed(0)}
                  </span>
                </span>
                <span onClick={() => handlePlanToggle("Monthly")}>
                  <small>Monthly</small>
                  <br />
                  <span className={`f-bolder ${styles.plan_price} `}>
                    ${state?.price}
                  </span>
                </span>
              </div>
              <div
                className={
                  planText === "Annual"
                    ? styles.bg_toggle_color_right
                    : styles.bg_toggle_color_left
                }
              ></div>
            </div>

            {/* Payment Method Selection */}
            <div className="py-4">
              <div className="row">
                <div className="col-lg-6 text-lg-start text-center  py-3">
                  <input
                    type="radio"
                    name="payment_method"
                    value="paypal"
                    id="paypal"
                    onChange={handleCheckoutFields}
                  />
                  <label htmlFor="paypal" className="ms-3">
                    Paypal
                  </label>
                </div>
                <div className="col-lg-6  py-3">
                  <figure className={styles.payment_paypal_icon}>
                    <img src="./images/checkout/paypal.png" alt="" />
                  </figure>
                </div>

                <div className="col-lg-6 text-lg-start text-center py-3">
                  <input
                    type="radio"
                    name="payment_method"
                    value="card"
                    id="card"
                    onChange={handleCheckoutFields}
                  />
                  <label htmlFor="card" className="ms-3">
                    Debit/Credit Card
                  </label>
                </div>
                <div className="col-lg-6 py-3">
                  <figure className={styles.payment_card_icon}>
                    <img src="./images/checkout/discover.png" alt="" />
                    <img src="./images/checkout/american.png" alt="" />
                    <img src="./images/checkout/master.png" alt="" />
                    <img src="./images/checkout/visa.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>

            <hr />
            {/* card detail form */}
            <div className="row">
              <div className="col-lg-8 col-11 ms-lg-0 mx-auto ">
                <div className="row">
                  <div className="col-12">
                    <label
                      htmlFor="cardNo"
                      className="form-label  text-light-gray"
                    >
                      Card Number
                    </label>
                    <input
                      type="number"
                      placeholder="4242 4242 4242 4242"
                      className="form-control"
                      id="cardNo"
                      name="card_no"
                      value={checkoutFields.card_no}
                      onChange={handleCheckoutFields}
                    />
                  </div>
                  <div className="col-lg-6 mt-3">
                    <label
                      htmlFor="expiry"
                      className="form-label text-light-gray"
                    >
                      Expiry
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="expiry"
                      name="expiry"
                      value={checkoutFields.expiry}
                      onChange={handleCheckoutFields}
                    />
                  </div>
                  <div className="col-lg-6 mt-3">
                    <label
                      htmlFor="cvc"
                      className="form-label  text-light-gray"
                    >
                      CVC
                    </label>
                    <input
                      type="password"
                      placeholder="XXXXX"
                      className="form-control"
                      id="cvc"
                      name="cvc"
                      value={checkoutFields.cvc}
                      onChange={handleCheckoutFields}
                    />
                  </div>
                  <div className="mt-3">
                    <Button
                      type="login_btn mb-3"
                      text="Pay Now"
                      action={handleCheckOut}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;

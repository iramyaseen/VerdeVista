import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./auth.module.css";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import AuthTitleHead from "../../components/AuthTitleHead/AuthTitleHead";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import GoogleAuthButton from "../../components/Button/GoogleAuthButton";
import { useDispatch } from "react-redux";
import axiosInstance from "../../../axiosConfig";
import { authUser } from "../../redux/userSlice";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [validationError, setValidationError] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
  });
  

  const handleLoginForm = (e) => {
    setLoginFields({ ...loginFields, [e.target.name]: e.target.value });
  };


  const handleUserLogin = async (e) => {
    e.preventDefault();
    setLoader(true);
  
    try {
      const res = await axiosInstance.post(`/login`, loginFields);
      if (res.data.status) {
        dispatch(authUser(res.data));
        setLoader(false);
        navigate("/");
      }
    } catch (error) {
      setLoader(false);
      if (!error?.response?.data?.status) {
        setErrorMessage(error?.response?.data?.message);
      } else {
        setValidationError(error?.response?.data?.errors);
      }
      console.log(error, "xxxxxxxxxxx");
    }
  };

  const handleGoogleAuth = (e) => {
    e.preventDefault();
    alert("google auth");
  };

  return (
    <AuthLayout>
      <div className={`${styles.authbox}`}>
        <AuthTitleHead title="Welcome Back!" />
        <div className={`${styles.form_container}`}>
          <span style={{ color: "red", fontWeight: 600 }} className="mb-3">
            {errorMessage && errorMessage}
          </span>
          <form className="row g-3">
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
                value={loginFields.email}
                onChange={handleLoginForm}
              />
              <small>{validationError?.email?.[0] && "email required"}</small>
            </div>

            <div className="col-12">
              <label
                htmlFor="inputpassword4"
                className="form-label  text-light-gray"
              >
                Password
              </label>
              <div className={styles.password_field_box}>
                <input
                  type={passwordType}
                  placeholder="Password"
                  className="form-control"
                  id="inputpassword4"
                  name="password"
                  value={loginFields.password}
                  onChange={handleLoginForm}
                />
                <small>
                  {validationError?.password?.[0] && "Password required"}
                </small>

                {passwordType === "password" ? (
                  <FaEyeSlash
                    className={styles.p_eye_icon}
                    onClick={() => setPasswordType("text")}
                  />
                ) : (
                  <FaEye
                    className={styles.p_eye_icon}
                    onClick={() => setPasswordType("password")}
                  />
                )}
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center py-2">
              <div>
                <input
                  className="form-radio-input me-2"
                  name="remember"
                  value="M"
                  type="radio"
                  id="remember1"
                />
                <label
                  className="form-check-label me-3 text-light-gray"
                  htmlFor="remember1"
                >
                  Remember
                </label>
              </div>
              <Link
                to=""
                className="text-green"
                style={{ textDecoration: "none", fontWeight: "600" }}
              >
                Forget Password
              </Link>
            </div>
            <hr />
            <div className="col-12 text-center">
              {loader ? (
                <Button
                  type="login_btn mb-3"
                  text="Loading..."
                  action={(e) => e.preventDefault()}
                />
              ) : (
                <Button
                  type="login_btn mb-3"
                  text="Login"
                  action={handleUserLogin}
                />
              )}
              <GoogleAuthButton action={handleGoogleAuth} />
              <br />
              <span className="text-light-gray">
                Don't have an account?
                <Link
                  to="/signup"
                  className="ms-2 text-green"
                  style={{ textDecoration: "none", fontWeight: "600" }}
                >
                  Signup
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;

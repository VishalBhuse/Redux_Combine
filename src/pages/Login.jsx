import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginapi } from "../Store/Auth/auth.actions";
import styles from "./all.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { isauth } = useSelector((state) => state.auth);
  
  
  const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginapi(loginCreds));
  };

  useEffect(() => {
    if (isauth) {
      navigate(location.state.pathname || "/", {replace : true});
    }
  }, [isauth]);

  return (
    <div>
      <h2>Login</h2>
      <form
        onSubmit={handleSubmit}
        className={styles.inputbox}
      >
        <input
          className={styles.input} 
          name="email"
          type="email"
          placeholder="Enter Email"
          value={loginCreds.email}
          onChange={hanldeChange}
        />
        <input
          className={styles.input} 
          name="password"
          type="password"
          placeholder="Enter Password..."
          value={loginCreds.password}
          onChange={hanldeChange}
        />
        <button className={styles.submit}  type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

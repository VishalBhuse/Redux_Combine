import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutapi } from "../Store/Auth/auth.actions";
import styles from "../pages/all.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isauth } = useSelector((state) => state.auth);
  const handleLoginClick = () => {
    dispatch(logoutapi());
  };
  return (
    <div className={styles.navbars}> 
      <div>
        <Link to="/">Home</Link>
        </div>
        <div>          
        <Link to={"/total"}>
          <p>Total Todos</p>
        </Link>
      </div>
      <div>
        <button onClick={handleLoginClick}>
          {isauth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

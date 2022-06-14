import React from 'react'
import { useSelector } from "react-redux";
import {Navigate, useLocation} from 'react-router-dom';

const Requiresauth = ({children}) => {

    const {isauth} = useSelector((state)=>state.auth);
      const location = useLocation();
      
      const from = {
        pathname: location.pathname,
      };
       
      if(isauth) return children;
      return <Navigate to={"/login"} state={from} replace />
};

export default Requiresauth
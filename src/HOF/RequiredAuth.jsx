import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
 

const RequiredAuth = ({ children }) => {
  const { auth } = useContext(AuthContext);
  if(!auth){
    return <Navigate to="/login"/>
  }
  return children;
};

export default RequiredAuth;
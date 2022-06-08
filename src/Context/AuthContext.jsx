import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setauth] = useState(true);
  const [token, settoken] = useState("");  

  const gettoken =(email,pass) =>{
    
    axios
    .post("https://reqres.in/api/login", {
      // email: "eve.holt@reqres.in",
      // password: "cityslicka",

      email: email,
      password: pass,
    })
    .then((e) => {
      console.log(e);       
      settoken(e.data.token);
    });
  }


  return <AuthContext.Provider value={{ auth ,token, settoken, gettoken, setauth}}>{children}</AuthContext.Provider>;
};
import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const authentication = useFirebase();
  return <authContext.Provider value={authentication}>{children}</authContext.Provider>;
};

export default AuthProvider;

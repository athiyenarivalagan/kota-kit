import { createContext, useContext, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import loginService from "../services/login"
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null)
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (credentials, callback) => {
    const user = await loginService.login(credentials)
    setUser(user)
    callback()
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = { user, login, logout}
  return <AuthContext.Provider value={value}><Outlet/></AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
import { useEffect, useState } from "react";
import AuthContext from "./auth-context";
import type { user } from "../types/user";

let storedUser = {
  username: "",
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  state: "",
  farm_size: "",
};

if (localStorage.getItem("user")) {
  storedUser = JSON.parse(localStorage.getItem("user")!);
}

let isUserAuth = false;

if (localStorage.getItem("isAuthenticated")) {
  isUserAuth = JSON.parse(localStorage.getItem("isAuthenticated")!);
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<user>(storedUser);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(isUserAuth);

  const handleUserUpdate = (user: user) => {
    setUser(user);
  };
  const setAuthStatus = (authStatus: boolean) => {
    setIsAuthenticated(authStatus);
  };

  // Sync to localStorage automatically
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
}, [user]);

  // Sync to localStorage automatically
  useEffect(() => {
    if (isAuthenticated) {
        localStorage.setItem("isAuthenticated", JSON.stringify(true));
    } else {
        localStorage.setItem("isAuthenticated", JSON.stringify(false));
        localStorage.removeItem("user");
    }
  }, [isAuthenticated]);

  const authCtxValue = {
    user,
    handleUserUpdate,
    isAuthenticated,
    setAuthStatus,
  };

  return (
    <AuthContext.Provider value={authCtxValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";
import type { user } from "../types/user";

const AuthContext = createContext({
  user: {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    state: "",
    farm_size: "",
  },
  handleUserUpdate: (_user: user) => {},
  isAuthenticated: false,
  setAuthStatus: (_authStatus: boolean) => {},
});

export default AuthContext;

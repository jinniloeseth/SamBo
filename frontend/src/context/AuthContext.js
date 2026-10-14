import { createContext, useContext, useState } from "react";
import mockUsers from "../mockData/users";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  function login(username, password) {
    const foundUser = mockUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      setCurrentUser(foundUser);
      return true;
    }
    return false;
  }

  function logout() {
    setCurrentUser(null);
  }

  function updateFeatureSettings(newSettings) {
    setCurrentUser((prevUser) => ({
      ...prevUser,
      featureSettings: newSettings,
    }));
  }

  return (
    <AuthContext.Provider
      value={{ currentUser, login, logout, updateFeatureSettings }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
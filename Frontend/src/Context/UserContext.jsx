import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [token, setToken] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // Fake login - acepta cualquier credencial válida
    if (email && password && password.length >= 6) {
      const fakeToken = `fake-token-${Date.now()}`;
      setToken(true);
      setUser({ email, token: fakeToken });
      localStorage.setItem('token', fakeToken);
      return { success: true };
    } else {
      return { success: false, error: 'Credenciales inválidas' };
    }
  };

  const logout = () => {
    alert("hey Compa! no podras pagar las Pizzas");
    setToken(false);
    setUser(null);
    localStorage.removeItem('token');
  };

  const value = { token, user, login, logout };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
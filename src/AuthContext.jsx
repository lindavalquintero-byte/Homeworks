import { createContext, useState } from "react";

export const AuthContext = createContext();

const USUARIOS_REGISTRADOS = [
  { email: "linda@mail.com", password: "123" },
  { email: "admin@mail.com", password: "admin" },
  { email: "user@mail.com", password: "123" },
];

export function AuthProvider({ children }) {
 const [user, setUser] = useState(() => {
  const saved = localStorage.getItem("user");
  return saved ? JSON.parse(saved) : null;
});

const login = (email, password) => {
    const encontrado = USUARIOS_REGISTRADOS.find(
      (u) => u.email === email && u.password === password
    );

    if (!encontrado) return false;

    const newUser = { email };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
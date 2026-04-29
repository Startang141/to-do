"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface User {
  name: string;
  position: string;
}

interface AuthContextType {
  user: User | null;
  login: (name: string, position: string) => void;
}

const getInitialUser = (): User | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const storedUser = localStorage.getItem("User");

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser) as User;
  } catch {
    localStorage.removeItem("User");
    return null;
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => getInitialUser());

  const login = (name: string, position: string) => {
    const newUser = { name, position };

    setUser(newUser);
    localStorage.setItem("User", JSON.stringify(newUser));
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth harus digunakan di dalam AuthProvider");
  }

  return context;
};

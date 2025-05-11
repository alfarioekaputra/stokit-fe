import React from "react";

export interface AuthContext {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  user: string | null;
}

const AuthContext = React.createContext<AuthContext | null>(null);

const key = "tanstack.auth.user";

function getStoredUser() {
  return localStorage.getItem(key);
}

function setStoredUser(user: string | null) {
  if (user) {
    localStorage.setItem(key, user);
  } else {
    localStorage.removeItem(key);
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<string | null>(getStoredUser());
  const isAuthenticated = !!user;

  const logout = React.useCallback(async () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", user!);

    const res = await fetch(`/api/users`, {
      method: "DELETE",
      headers: myHeaders,
    });

    if (!res.ok) throw new Error("Logout gagal");

    const { data } = await res.json();

    if (data) {
      setStoredUser(null);
      setUser(null);
    }
  }, []);

  const login = React.useCallback(async (email: string, password: string) => {
    const res = await fetch(`/api/users/_login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error("Login gagal");
    const { data } = await res.json();

    setStoredUser(data.token);
    setUser(email);

    return await data.token;
  }, []);

  React.useEffect(() => {
    setUser(getStoredUser());
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// export const login = async (email: string, password: string) => {
//   const res = await fetch(`/api/users/_login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password }),
//   });
//   if (!res.ok) throw new Error("Login gagal");
//   const { data } = await res.json();
//   localStorage.setItem("auth_token", data.token);
//   return await data.token;
// };

// export const logout = () => {
//   localStorage.removeItem("auth_token");
// };

// export const getToken = () => {
//   return localStorage.getItem("auth_token");
// };

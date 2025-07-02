const AUTH_KEY = "auth";
const USER_KEY = "uname";

export const AuthService = {
  isAuthenticated: () => {
    return localStorage.getItem(AUTH_KEY) === "true";
  },

  login: (userName, password) => {
    localStorage.setItem(AUTH_KEY, "true");
    localStorage.setItem(USER_KEY, userName);
  },

  logout: () => {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(USER_KEY);
  },

  getUsername: () => localStorage.getItem(USER_KEY) || "",
};

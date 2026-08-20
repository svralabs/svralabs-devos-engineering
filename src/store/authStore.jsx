import React, { createContext, useContext, useState, useEffect } from 'react';
let state = {
  user: { name: 'Alex Johnson', email: 'alex@svralabs.com', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500' },
  isAuthenticated: true,
  token: 'mock-jwt-token'
};
const listeners = new Set();
const notify = () => listeners.forEach(l => l(state));

export const AuthContext = createContext(state);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(state.user);
  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login: () => setUser(state.user), logout: () => setUser(null) }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext) || state;

export const useAuthStore = (selector) => {
  const [, setTick] = useState(0);
  useEffect(() => {
    const l = () => setTick(t => t + 1);
    listeners.add(l);
    return () => listeners.delete(l);
  }, []);
  const actions = {
    ...state,
    setUser: (u) => { state.user = u; notify(); },
    logout: () => { state.user = null; state.isAuthenticated = false; notify(); }
  };
  return selector ? selector(actions) : actions;
};
export default useAuthStore;

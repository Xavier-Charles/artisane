/* Persist Twitter user session with local storage and react context */
import React, { useState, useEffect, createContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  TwitterAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBR-Ob5Hh8Ps0o0AejoFCsgBQ7Pfpyrpu4",
  authDomain: "artisane-hostess.firebaseapp.com",
  projectId: "artisane-hostess",
  storageBucket: "artisane-hostess.appspot.com",
  messagingSenderId: "587481048520",
  appId: "1:587481048520:web:9e758abb0b428432968cfd",
  measurementId: "G-PZVFPQRQ3X",
};

try {
  const app = initializeApp(firebaseConfig);
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const auth = getAuth();

const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
      setLoading(false);
    });
  }, []);
  const provider = new TwitterAuthProvider();
  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };

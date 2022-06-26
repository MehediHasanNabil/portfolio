import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import initializeFirebaseApp from "./firebaseConfig";

export const API_URL = "http://localhost:8080";
export const LoggedInUser = createContext({});

function App() {
  const [authUser, setAuthUser] = useState({
    displayName: "",
    email: "",
    emailVerified: false,
    photoURL: "",
  });

  const auth = getAuth(initializeFirebaseApp);

  useEffect(
    function () {
      AOS.init({
        duration: 2000,
        once: true,
      });

      onAuthStateChanged(auth, (user) => {
        if (user) {
          const userObj = {
            displayName: user?.displayName,
            email: user?.email,
            emailVerified: user?.emailVerified,
            photoURL: user?.photoURL,
          };
          setAuthUser(userObj);
        } else {
          setAuthUser({});
        }
      });
    },
    [auth]
  );

  return (
    <LoggedInUser.Provider value={authUser}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </LoggedInUser.Provider>
  );
}

export default App;

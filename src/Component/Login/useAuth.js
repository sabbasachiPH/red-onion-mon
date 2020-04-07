// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import React from "react";
import { useState, createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

const getUser = (user) => {
  const { displayName, photoURL, email } = user;
  return { name: displayName, photo: photoURL, email };
};

const Auth = () => {
  const [user, setUser] = useState(null);
  const provider = new firebase.auth.GoogleAuthProvider();
  const signInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // The signed-in user info.
        const signedInUser = getUser(result.user);
        console.log(signedInUser);
        setUser(signedInUser);
      })
      .catch((error) => {
        setUser(null);
        console.log(error.message);

        return error.message;
      });
  };
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setUser(null);
        return "Sign-out successful.";
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (usr) {
      if (usr) {
        const currentUser = getUser(usr);
        console.log(currentUser);
        setUser(currentUser);
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
  }, []);

 const handleInnerClick = (event) => event.target.innerText;
 

  return {
    user,
    signInWithGoogle,
    signOut,
    handleInnerClick
  };
};
export default Auth;

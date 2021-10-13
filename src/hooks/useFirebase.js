import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "@firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const signInWithGoogle = () => {
    setIsLoading(true);
    const gAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, gAuthProvider)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  const signInWithGithub = () => {
    setIsLoading(true);
    const gitAuthProvider = new GithubAuthProvider();
    signInWithPopup(auth, gitAuthProvider)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  const signInWithFacebook = () => {
    setIsLoading(true);
    const fbAuthProvider = new FacebookAuthProvider();
    signInWithPopup(auth, fbAuthProvider)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const createAccountWithEmailandPassword = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  const logInWithEmailandPassword = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  const logOut = () => {
    signOut(auth).then(setUser(null));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        setIsLoading(false);
        // ...
      } else {
        // User is signed out
        console.log("not logged in.");

        setIsLoading(false);
      }
    });
  }, []);

  return {
    user,
    error,
    isLoading,
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,
    createAccountWithEmailandPassword,
    logInWithEmailandPassword,
    logOut,
  };
};

export default useFirebase;

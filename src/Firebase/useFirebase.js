import initFirebase from "./firebase.init";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { setLoading, setUser } from "../actions";
import { useDispatch } from "react-redux";

const useFirebase = () => {
   const dispatch = useDispatch();
   initFirebase();
   const googleProvider = new GoogleAuthProvider();
   const auth = getAuth();
   const googleSignIn = () => {
      dispatch(setLoading(true))
      return signInWithPopup(auth, googleProvider)
   }
   useEffect(() => {
      dispatch(setLoading(true))
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            dispatch(setUser(user));
         }
         else {
            dispatch(setUser({}))
         }
         dispatch(setLoading(false))
      })
      return unsubscribe
   }, [auth])

   const logOut = () => {
      dispatch(setLoading(true))
      signOut(auth)
         .then(() => {
            dispatch(setLoading(false))
            dispatch(setUser({}))
         })
         .catch(error => { console.log(error.message) })
   }
   return {
      googleSignIn,
      logOut
   }
}

export default useFirebase;
import {
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const res = await getRedirectResult(auth);

      if (res) {
        await createUserDocumentFromAuth(res.user);
      }
    }
    fetchData();
  }, []);



  return (
    <div className="sign-in authentication-container">
      {/* <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

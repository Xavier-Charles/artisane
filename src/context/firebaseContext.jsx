import { initializeApp, getApp, getApps } from "firebase/app";
import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
  sendSignInLinkToEmail,
} from "firebase/auth";

const clientCredentials = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const firebaseApp = getApps().length
  ? getApp()
  : initializeApp(clientCredentials);

const auth = getAuth(firebaseApp);
const db = getFirestore(app);

const APP_URL = "artisane-git-fix-subscribe-xavier-charles.vercel.app";

const actionCodeSettings = {
  url: `https://${APP_URL}/subscribe`,
  // This must be true.
  handleCodeInApp: true,
};

export const handleEmailSubscribe = (name, email, callback) => {
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", email);
      callback({ status: "success" });
    })
    .catch((error) => {
      const errorMessage = error.message;
      callback({ status: "error", message: errorMessage });
    });
};

// Confirm the link is a sign-in with email link.
export const verifyEmailLink = () => {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt(
        "Please open this link on the same device you filled your details."
      );
    }
    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(auth, email, window.location.href)
      .then(async (result) => {
        const { user } = result;
        // Clear email from storage.
        window.localStorage.removeItem("emailForSignIn");
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
        console.log(result);

        try {
          await setDoc(collection(db, "users"), {
            id: user.uid,
            email: user.email,
            emailVerified: true,
            updatedAt: user.metadata.lastSignInTime,
            createdAt: user.metadata.creationTime,
          });
        } catch (error) {
          Logger.error("FirebaseContext::signInWithEmailLink: ", error);
        }
      })
      .catch((error) => {
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
      });
  }
};

// TODO use this later
// const FirebaseContextProvider = ({ children }) => {
//   return (
//     <FirebaseContext.Provider value={{}}>{children}</FirebaseContext.Provider>
//   );
// };
// export default FirebaseContextProvider;

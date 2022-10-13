import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

const clientCredentials = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "https://artisane.vercel.app/signup",
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: "com.example.ios",
  },
  android: {
    packageName: "com.example.android",
    installApp: true,
    minimumVersion: "12",
  },
  dynamicLinkDomain: "artisane.vercel.app/",
};

const firebaseApp = getApps().length
  ? getApp()
  : initializeApp(clientCredentials);

export const handleEmailSubscribe = (name, email, callback) => {
  const auth = getAuth(firebaseApp);
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", email);
      callback({ status: "success" });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ error }); // TODO remove this
      callback({ status: "error", message: errorMessage });
    });
};

// TODO use this later
// const FirebaseContextProvider = ({ children }) => {
//   return (
//     <FirebaseContext.Provider value={{}}>{children}</FirebaseContext.Provider>
//   );
// };
// export default FirebaseContextProvider;

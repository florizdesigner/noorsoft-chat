import React from "react";
import { useFormik } from "formik";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import "../../models/elements.scss";
import "./loginForm.scss";

const LoginForm = (props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRegistration, setIsRegistration] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setIsLoading(true);
      const auth = getAuth();
      console.log(auth);
      console.log(JSON.stringify(values, null, 2));

      if (isRegistration) {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log(user);
            })
            .catch((error) => {
              console.log(error);
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            })
            .finally(() => {
              setIsLoading(false);
            });
      } else {
          signInWithEmailAndPassword(auth, values.email, values.password)
              .then((userCredential) => {
                  const user = userCredential.user;
                  console.log(user)
              })
              .catch((error) => {
                  console.log(error)
                  const errorCode = error.code;
                  const errorMessage = error.message;
              })
              .finally(() => setIsLoading(false));
      }

    },
  });

  const redirect = () => {
    if (isRegistration) {
      return (
        <div>
          Have an account?{" "}
          <span
            className="redirect_link"
            onClick={() => setIsRegistration(!isRegistration)}
          >
            Login
          </span>
        </div>
      );
    } else {
      return (
        <div>
          Don't have an account?{" "}
          <span
            className="redirect_link"
            onClick={() => setIsRegistration(!isRegistration)}
          >
            Register
          </span>
        </div>
      );
    }
  };

  /// firebase ///

  //////////// разобраться с process.env

  // const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_FIREBASE_APP_ID
  // };

  const firebaseConfig = {
    apiKey: "AIzaSyCAPgnuojmRnFfE4bQcNLUS88fF98WH2V8",
    authDomain: "noorsoft-test-chat.firebaseapp.com",
    projectId: "noorsoft-test-chat",
    storageBucket: "noorsoft-test-chat.appspot.com",
    messagingSenderId: "411635192055",
    appId: "1:411635192055:web:351cb5ac5011de2ef1c3f2",
  };

  const app = initializeApp(firebaseConfig);

  const toggleSignIn = async () => {
    await console.log(app);
  };

  return (
    <div className="class_window_wrapper">
      <div className="class_form_wrapper">
        {isLoading ? (
          <>
            <style>
            </style>
            <div>Loading...</div>
          </>
        ) : (
          <>
            <h2 className="class_form_header">
              {isRegistration ? "Registration" : "Login"}
            </h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="class_element_wrapper">
                <label htmlFor="email">Email Address</label>
                <input
                  autoFocus={true}
                  className="class_input"
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required
                />
              </div>

              <div className="class_element_wrapper">
                <label htmlFor="password">Password</label>
                <input
                  className="class_input"
                  id="password"
                  name="password"
                  type="password"
                  minLength={6}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  required
                />

                {/* Ниже валидация */}

                {/*<fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline mui-zkdhvc">*/}
                {/*  <legend className="mui-hdw1oc"><span className="notranslate">​</span></legend>*/}
                {/*</fieldset>*/}
              </div>

              <div className="class_element_wrapper">
                <button type="submit" className="class_button">
                  {isRegistration ? "Registration" : "Login"}
                </button>
              </div>

              <div>{redirect()}</div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;

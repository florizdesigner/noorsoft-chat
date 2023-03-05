import React from "react";
import { useFormik } from "formik";
import "../models/elements.scss";

const LoginForm = (props) => {
  const [isRegistration, setIsRegistration] = React.useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const redirect = () => {
    if (isRegistration) {
      return (
          <div>
            Have an account? <a className='redirect_link' onClick={() => setIsRegistration(!isRegistration)}>Login</a>
          </div>
      )
    } else {
      return (
          <div>
            Don't have an account? <a className='redirect_link' onClick={() => setIsRegistration(!isRegistration)}>Register</a>
          </div>
      )
    }
  }

  return (
    <div className="class_window_wrapper">
      <div className="class_form_wrapper">
        <h2 className="class_form_header">{isRegistration ? "Registration" : "Login"}</h2>
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
          </div>

          <div className="class_element_wrapper">
            <button type="submit" className="class_button">
              {isRegistration ? "Registration" : "Login"}
            </button>
          </div>

          <div>
            {redirect()}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

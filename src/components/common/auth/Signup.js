import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { Formik } from "formik";
import * as Yup from "yup";
import FacebookIcon from "../../../assets/images/facebook.png";
import GoogleIcon from "../../../assets/images/google.png";
import OasisIcon from "../../../assets/images/oasis.png";

import services from "../../../services";

const Signup = (props) => {
  const inProgress = useSelector(state => state.auth.inProgress);

  const dispatch = useDispatch();
  const onUnload = () => dispatch({ type: REGISTER_PAGE_UNLOADED });
  const onSubmit = (payload) => dispatch({ type: REGISTER, payload });
  const onSubmitting = () => dispatch({ type: REGISTERING });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("First name is required"),
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 characters minimum."),
    confirmPassword: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 characters minimum.")
      .oneOf([Yup.ref('password'), null], "Password did not match"),
  })

  const handleSignup = (values) => {
    if (values.password !== values.confirmPassword) {
      toast.error("Password did not match");
      return;
    }
    const config = {
      "username": values.username,
      "email": values.email,
      "password": values.password,
    };
    onSubmitting();
    services.Auth.register(config)
      .then(res => {
        onSubmit('');
        toast.success('Register successfully!');
        navigate('/auth');
        props.seletLogin()
      })
      .catch(error => {
        toast.error('Register failed!');
        onSubmit({ errors: error?.response?.data });
      })
  }

  const handleFormFieldClass = (error, touched) => {
    let classes = "single-form-field ";
    classes += (error && touched) ? "has-error" : "";

    return classes;
  }

  useEffect(() => {
    return () => onUnload();
  }, [])

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSignup(values)}
      >
        {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <div>
            <form className="custom-form" onSubmit={handleSubmit}>
              <div className="form-inputs">
                <div className={handleFormFieldClass(errors.username, touched.username)}>
                  <input
                    type="text"
                    name="username"
                    disabled={inProgress}
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Name"
                  />
                  <span className="text-danger">
                    {errors.username && touched.username && errors.username}
                  </span>
                </div>

                <div className={`${handleFormFieldClass(errors.email, touched.email)} mail-box`}>
                  <input
                    type="email"
                    name="email"
                    disabled={inProgress}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your Email"
                  />
                  <span className="text-danger">{errors.email && touched.email && errors.email}</span>
                </div>

                <div className={handleFormFieldClass(errors.password, touched.password)}>
                  <div className="have-icon">
                    <input
                      type={`${showPassword ? "text" : "password"}`}
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      disabled={inProgress}
                      onBlur={handleBlur}
                      placeholder="Your Password"
                    />
                  </div>
                  <span className="text-danger">{errors.password && touched.password && errors.password}</span>
                </div>

                <div className={handleFormFieldClass(errors.confirmPassword, touched.confirmPassword)}>
                  <div className="have-icon">
                    <input
                      type={`${showconfirmPassword ? "text" : "password"}`}
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={inProgress}
                      placeholder="Confirm Password"
                    />
                  </div>
                  <span className="text-danger">{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</span>
                </div>

                <button type="submit" className="submit-button" disabled={inProgress}>
                  <img width="auto" height="30px" src={OasisIcon} alt="Sign up with OASIS"></img>
                  {inProgress ? <div className="loader"><Oval height={24} width={24} color="#000" /><p>Signing</p></div> : <p>Sign Up</p>}
                </button>

                <h5>or</h5>

                <button type="submit" className="submit-facebook" disabled={isSubmitting}>
                  <img src={FacebookIcon} alt="Sign in with Facebook"></img>
                  <p>Sign up with Facebook</p>
                </button>

                <button type="submit" className="submit-google" disabled={isSubmitting}>
                  <img src={GoogleIcon} alt="Sign in with Google"></img>
                  <p>Sign up with Google</p>
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </>
  )

}

export default Signup;
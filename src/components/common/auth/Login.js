import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { Oval } from "react-loader-spinner";
import { Formik } from "formik";
import * as Yup from "yup";
import FacebookIcon from "../../../assets/images/facebook.png";
import GoogleIcon from "../../../assets/images/google.png";
import OasisIcon from "../../../assets/images/oasis.png";

const Login = (props) => {
  const inProgress = useSelector(state => state.auth.inProgress);

  const dispatch = useDispatch();
  const onUnload = () => dispatch({ type: LOGIN_PAGE_UNLOADED });
  const onSubmit = (payload) => dispatch({ type: LOGIN, payload });
  const onSubmitting = () => dispatch({ type: LOGGING_IN });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: '',
    password: ''
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 characters minimum.")
  })

  const handleLogin = (values) => {
    const config = {
      "email": values.email,
      "password": values.password,
    }
    onSubmitting();
    services.Auth.login(config)
      .then(res => {
        console.log('login=', res.data)
        onSubmit(res.data);
        toast.success("Login successfully!");
        services.setToken(res.data.password);
        navigate('/home');
      })
      .catch(error => {
        console.log(error?.response?.data);
        toast.error(error?.response?.data?.message);
        onSubmit({ errors: error?.response?.data });
      });
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
        onSubmit={(values) => handleLogin(values)}
      >
        {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (

          <div>
            <form className="custom-form" onSubmit={handleSubmit}>
              <div className="form-inputs">
                <div className={handleFormFieldClass(errors.email, touched.email)}>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={inProgress}
                    placeholder="Enter your email" />
                  <span className="text-danger">{errors.email && touched.email && errors.email}</span>
                </div>

                <div className={handleFormFieldClass(errors.password, touched.password)}>
                  <div className="have-icon">
                    <input
                      type={`${showPassword ? "text" : "password"}`}
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={inProgress}
                      placeholder="Your Password" />
                  </div>
                  <span className="text-danger">{errors.password && touched.password && errors.password}</span>
                </div>

                <div className="forgot-password">
                  <Link to="/auth/forgot" className="forgot">Forgot Your Password</Link>
                </div>

                <button type="submit" className="submit-button" disabled={inProgress}>
                  <img width="auto" height="30px" src={OasisIcon} alt="Sign in with OASIS"></img>
                  {inProgress ? <div className="loader"><Oval height={24} width={24} color="#000" /><p>Logging in</p></div> : <p>Log in</p>}
                </button>

                <button type="submit" className="submit-button" onClick={props.seletLogin}>
                  <img width="auto" height="30px" src={OasisIcon} alt="Sign in with OASIS"></img>
                  Sign up
                </button>

                <button type="submit" className="submit-facebook" disabled={isSubmitting}>
                  <img src={FacebookIcon} alt="Sign in with Facebook"></img>
                  <p>Sign in with Facebook</p>
                </button>

                <button type="submit" className="submit-google" disabled={isSubmitting}>
                  <img src={GoogleIcon} alt="Sign in with Google"></img>
                  <p>Sign in with Google</p>
                </button>
              </div>

            </form>
          </div>
        )}
      </Formik>
    </>
  )

}

export default Login;
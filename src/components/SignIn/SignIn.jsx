import {
  MDBContainer,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import locobrand from "../../assets/image/sign/signin.png";
import "./signIn.css";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        alert("You logged in successfully");
        setTimeout(() => {
          console.log("Logging in", values);
          setSubmitting(true);
        }, 5000);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Cannot be left blank")
          .matches(/(?=.*\w+[@]\w+[.]\w{3}([.]\w{2})?)/, "Email invalid"),
        password: Yup.string()
          .required("Password has not been entered")
          .min(6, "Password is too short - must be at least 6 characters")
          .max(12, "Password is too long - must be at most 6 characters")
          .matches(/(?=.*[0-9])/, "Password must contain at least one number"),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className="validate-layout container-fluid">
            <MDBRow>
              <MDBCol col="4" md="6">
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <p className="lead fw-normal mb-0 me-3">
                    <b>SIGN IN FORM</b>
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <label htmlFor="email">Email</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    size="lg"
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email && "error"}
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                  <label htmlFor="email">Password</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    size="lg"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"}
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}
                  <div className="d-flex justify-content-between mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Remember me"
                    />
                    <a href="#">Forgot password?</a>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mb-0 px-5"
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-2">
                    Don't have an account?{" "}
                    <a href="/signup" className="link-danger">
                      Register
                    </a>
                  </p>
                </form>
              </MDBCol>

              <MDBCol col="10" md="6">
                <img
                  src={locobrand}
                  width={800}
                  class="img-fluid"
                  alt="Sample image"
                />
              </MDBCol>
            </MDBRow>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignIn;

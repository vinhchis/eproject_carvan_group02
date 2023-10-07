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
import locobrand from "../../assets/image/sign/signup.png";
import { Formik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  return (
    <Formik
      initialValues={{ name: "", username: "", email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        alert("You have successfully registered");
        setTimeout(() => {
          console.log("Signup", values);
          setSubmitting(false);
        }, 5000);
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Cannot be left blank"),
        username: Yup.string().required("Cannot be left blank"),
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
                <img
                  src={locobrand}
                  width={1000}
                  class="img-fluid"
                  alt="Sample image"
                />
              </MDBCol>
              <MDBCol col="10" md="6">
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <p className="lead fw-normal mb-0 me-3">
                    <b>SIGN UP FORM</b>
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Name</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name && touched.name && "error"}
                  />
                  {errors.name && touched.name && (
                    <div className="input-feedback">{errors.name}</div>
                  )}
                  <label htmlFor="username">Username</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.username && touched.username && "error"}
                  />
                  {errors.username && touched.username && (
                    <div className="input-feedback">{errors.username}</div>
                  )}

                  <label htmlFor="email">Email</label>
                  <MDBInput
                    wrapperClass="mb-4"
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
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mb-2 px-5"
                  >
                    SignUp
                  </button>
                </form>
              </MDBCol>
            </MDBRow>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignUp;

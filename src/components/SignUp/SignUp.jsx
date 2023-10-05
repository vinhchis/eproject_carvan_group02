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

const SignUp = () => {
  return (
    <MDBContainer className="p-3 h-custom">
      <MDBRow>
        <MDBCol col="4" md="6">
          <img
            src={locobrand}
            width={500}
            class="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="10" md="6">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign up with:</p>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <FaFacebookF />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <FaGoogle />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <FaTwitter />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <FaGithub />
            </MDBBtn>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-2 mb-0">Or:</p>
          </div>

          <MDBInput
            wrapperClass="mb-4"
            placeholder="Name"
            id="form1"
            type="text"
          />
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Username"
            id="form1"
            type="text"
          />
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Email"
            id="form1"
            type="email"
          />
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Password"
            id="form1"
            type="password"
          />

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <div className="text-center text-md-start mt-4 pt-2">
            <MDBBtn className="mb-0 px-5" size="lg" href="/signin">
              Sign up
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignUp;

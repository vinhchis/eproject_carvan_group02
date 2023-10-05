import Modalfeedback from "./Modal/Modal_feedback";
import Modallocation from "./Modal/Modal_location.jsx";
import Modalchat from "./Modal/Modal_chat.jsx";
import Modalopportunity from "./Modal/Modal_opportunity.jsx";
import Cross from "./cross.png";
import QRcode from "./QRcode.png";
import "./contact.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="container-fluid contact mt-3 mb-2 ">
      <div className="item-1 d-flex justify-content-evenly mt-3">
        <Row>
          <Col>
            <div className="contact-feedback">
              <Modalfeedback />

              <p>
                <b>General Inquiries / Feedback</b>
              </p>
              <img src={Cross} alt="Cross" width={300} />
              <p>
                <b>+84 1900-6067</b>
              </p>
              <p>8:00 AM - 4:00 PM (Mon-Sat) </p>
              <a href="#">carvan@gmail.com</a>
            </div>
          </Col>
          <Col>
            <div className="contact-phone">
              <Modalchat />
              <p>
                <b>Chat with us</b>
              </p>
              <img src={Cross} alt="Cross" width={300} />
              <p>
                <img src={QRcode} alt="QRcode" width={100} />
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="d-flex justify-content-evenly">
        <Row>
          <Col>
            <div className="contact-opportunity mt-3">
              <Modalopportunity />
              <p>
                <b>Opportunity</b>
              </p>
              <img src={Cross} alt="Cross" width={300} />
              <br />
              <b>Dealer Partnerships</b>
              <br />
              <a href="#">businessdev.carvan@gmail.com</a>
              <br />
              <b>Other Partnerships</b>
              <br />
              <a href="#">partnerships.carvan@gmail.com</a>
            </div>
          </Col>

          <Col>
            <div className="contact-location mt-3">
              <Modallocation />
              <p>
                <b>Company Office Address</b>
              </p>
              <img src={Cross} alt="Cross" width={300} />
              <div className="d-flex justify-content-between">
                <div>
                  <b>CARVAN HQ</b>
                  <br />
                  <p>
                    Lot I2 , D1 Street, Hiep Phu Ward
                    <br />
                    Thu Duc City,Ho Chi Minh City Vietnam
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;

// Updated ThankYou component

import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/thank-you.css";

const ThankYou = () => {
  return (
    <section className="thank-you-section">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg="12" className="text-center">
            <div className="thank__you">
              <span>
                <i className="ri-checkbox-circle-line"></i>
              </span>
              <h1 className="mb-3 fw-semibold">Thank You</h1>
              <h3 className="mb-4">Your tour is booked</h3>
              <h3 className="mb-4">We will contact you soon.</h3>

              <Button className="btn primary__btn w-50">
                <Link to="/home" className="text-white text-decoration-none">
                  Back to Home
                </Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou;

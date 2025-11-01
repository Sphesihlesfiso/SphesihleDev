import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import heroImage from "../../Assets/hero-security.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="position-relative min-vh-100 d-flex align-items-center text-white overflow-hidden"
      style={{ backgroundColor: "#0c0c0c" }}
    >
      {/* Background image with gradient overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <img
          src={heroImage}
          alt="Elite security professional"
          className="w-100 h-100 object-fit-cover"
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.85), rgba(0,0,0,0.5))",
          }}
        ></div>
      </div>

      {/* Content */}
      <Container className="position-relative z-1 py-5">
        <Row className="align-items-center">
          <Col lg={8} className="animate__animated animate__fadeIn">
            {/* Title and Branding */}
            <div className="d-flex align-items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gold"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              </svg>
              <span className="fw-semibold text-warning text-uppercase">
                Elite Protection Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="display-4 fw-bold mb-4">
              Your Safety is Our <span className="text-warning">Priority</span>
            </h1>

            {/* Subtext */}
            <p className="fs-5 text-light mb-5">
              Premium security and VIP protection services for executives,
              celebrities, and high-profile individuals. Discreet, professional,
              and always vigilant.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
              <Button
                variant="warning"
                size="lg"
                className="fw-semibold px-4 py-2 shadow-sm"
              >
                Request Protection
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                className="fw-medium px-4 py-2"
              >
                View Services
              </Button>
            </div>

            {/* Highlights */}
            <div className="d-flex flex-column flex-md-row gap-4 text-light small">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-warning"></i>
                <span>24/7 Protection</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-warning"></i>
                <span>Licensed Professionals</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-warning"></i>
                <span>Global Coverage</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

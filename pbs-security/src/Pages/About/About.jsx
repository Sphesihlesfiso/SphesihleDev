import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import stats from "../../Assets/aboutStats";
import "animate.css";

const About = () => {
 

  return (
    <section id="about" className="py-5 bg-dark text-light">
      <Container>
        {/* Title and Description */}
        <div className="text-center mb-5 animate__animated animate__fadeIn">
          <h2 className="display-5 fw-bold mb-3">
            About <span className="text-warning">Elite Guard</span>
          </h2>
          <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: "700px" }}>
            Founded by former special operations professionals, Elite Guard
            delivers world-class security solutions to high-profile clients
            worldwide. Our team combines military precision with executive
            protection expertise to ensure complete safety and discretion.
          </p>
        </div>

        {/* Stats Grid */}
        <Row className="g-4 justify-content-center mb-5">
          {stats.map((item, index) => (
            <Col
              xs={6}
              lg={3}
              key={index}
              className="animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="text-center border-0 bg-secondary bg-opacity-25 text-light shadow-sm p-4 h-100 hover-shadow transition-all rounded-4">
                <div className="mb-3">{item.icon}</div>
                <h3 className="fw-bold text-white mb-1">{item.value}</h3>
                <p className="text-muted">{item.label}</p>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Mission Section */}
        <div className="bg-secondary bg-opacity-25 border border-secondary rounded-4 p-5 animate__animated animate__fadeInUp text-center">
          <h3 className="fw-bold display-6 mb-3 text-white">Our Mission</h3>
          <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: "800px" }}>
            To provide unparalleled security services that allow our clients to
            live, work, and travel with complete peace of mind. We combine
            cutting-edge technology, elite training, and uncompromising
            professionalism to deliver protection that is both invisible and
            invincible.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;


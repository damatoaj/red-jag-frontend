import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styled from "@emotion/styled";
import { Container, Col, Row } from "react-bootstrap";

const StyledFooter = styled.div`
  background-color: var(--color-green);
  padding: 2rem;
  height: 20%;
  width: 100%;
  margin-top: 100%;
  border-radius: 30%/100px 100px 0 0;
  color: var(--color-black);
  font-size: 24px;

  a {
    text-decoration: none;
    color: var(--color-black);
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
    color: var(--color-orange);
  }
`;

export default function Footer() {
  return (
    <div>
      <StyledFooter>
        <Container color="blue" className="font-small pt-4 mt-4">
          <Container fluid className="text-center text-md-left">
            <Row>
              <Col md="6">
                {/* <h5 className="title"></h5> */}
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Home</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">About</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Contact</a>
                  </li>
                </ul>
              </Col>
              <Col md="6">
                <h5 className="title">Social Media</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Instagram</a>
                    <i class="fab fa-instagram"></i>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Twitter</a>
                    <i class="fab fa-twitter"></i>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Facebook</a>
                    <i class="fab fa-facebook"></i>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Discord</a>
                    <i className="fab fa-discord"></i>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.ootstrap.com"> tracker.com </a>
            </Container>
          </div>
        </Container>
      </StyledFooter>
    </div>
  );
}

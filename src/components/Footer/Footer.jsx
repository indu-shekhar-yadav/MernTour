import React from 'react'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import './footer.css'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo-blue.png"

const quick__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/hotels',
    display:'Hotel'
  },
  {
    path:'/tour',
    display:'Tours'
  },
  {
    path:'/flights',
    display:'Flights'
  },
];
const quick__links2=[
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },
];

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className='logo'>
              <img src={logo} alt='' />
              <p>Have a safe and secure journey</p>
              <div className="social__links d-flex align-items-center gap-4">
              <span>
                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank" rel="noopener noreferrer">
                  <i class="ri-youtube-line"></i>
                </a>
              </span>
              <span>
                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank" rel="noopener noreferrer">
                  <i class="ri-github-line"></i>
                </a>
              </span>
              <span>
                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank" rel="noopener noreferrer">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank" rel="noopener noreferrer">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
              <Col lg='3'>
                <h5 className="footer__Link-title">Contact</h5>
                <ListGroup className="footer__quick-links">
                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                      <span><i class="ri-map-pin-line"></i></span>
                      Address:
                    </h6>
                    <p className="mb-0">Bhupendar Jogi,India</p>
                    </ListGroupItem>
                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                      <span><i class="ri-mail-line"></i></span>
                      Email:
                    </h6>
                    <p className="mb-0">bhupendarjogi@gmail.com</p>
                    </ListGroupItem>
                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                      <span><i class="ri-phone-fill"></i></span>
                      Phone:
                    </h6>
                    <p className="mb-0">+0911234567890</p>
                    </ListGroupItem>
                    </ListGroup>
              </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
import { Container, Row, Col } from "react-bootstrap";
import Kat from '../assets/images/kangs_dead_cat.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={4}>
            <p>Thanks for reaching the end! Surprise CAT!</p>
          </Col>
          <Col>
            <img src={Kat}/>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
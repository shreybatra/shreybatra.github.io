import { Col, Container, Image, Row, Button } from "react-bootstrap";

export const MainPage = () => {
  return (
    <Container className="text-center">
      <Row className="justify-content-md-center">
        <Col md={4} xs={12} className="pt-5">
          <Image
            className="p-5"
            roundedCircle
            fluid
            src="https://avatars.githubusercontent.com/u/22788006?v=4"
          />
          <h1 className="display-1">Shrey Batra</h1>
          <h3>Engineer @ LinkedIn (Big Data)</h3>
          <Container className="mt-4">
            <Button href="https://www.linkedin.com/in/shreybatra/" target="_">
              <i className="bi bi-linkedin" /> LinkedIn
            </Button>{" "}
            <Button
              variant="success"
              href="https://github.com/shreybatra"
              target="_"
            >
              <i className="bi bi-github" /> Github
            </Button>{" "}
            <Button
              variant="info"
              href="https://twitter.com/ShreyBatra"
              target="_"
            >
              <i className="bi bi-twitter" /> Twitter
            </Button>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

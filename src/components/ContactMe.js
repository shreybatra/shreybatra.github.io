import axios from "axios";
import { useState } from "react";
import {
  Card,
  Col,
  Container,
  Form,
  Row,
  Button,
  Spinner,
} from "react-bootstrap";

export const ContactMe = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleOnChange = (e, func) => {
    func(e.target.value);
  };

  const buttonText = () => {
    if (loading) {
      return (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      );
    } else {
      return "Submit";
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      subject: subject,
      message: message,
    };
    setLoading(true);
    axios
      .post(
        "https://prod-09.centralindia.logic.azure.com:443/workflows/12bc02473aab4b72b62006f3a317b9ce/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=IWup_OlBft5FcGqRELnwSbk7Hpq7qRShHGVdyF-632g",
        data
      )
      .then(() => {
        alert("Message successfully sent.");
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setLoading(false);
      })
      .catch(() => {
        alert("Something went wrong, please connect with me on LinkedIn.");
        setEmail("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setLoading(false);
      });
  };

  return (
    <Container className="pt-5">
      <h1 className="display-3 pb-3 text-center">Contact Me</h1>
      <Card className="h-100 mt-5">
        <Row>
          <Col md={4} className="custom-dark text-white">
            <Card.Body className="h-100 mt-5 pt-5">
              <h1 className="display-6 text-center">
                Connect with me on Social Media
              </h1>
              <Row className="mt-5 gap-3 mx-3">
                <Button
                  variant="light"
                  href="https://www.linkedin.com/in/shreybatra/"
                  target="_"
                >
                  <i className="bi bi-linkedin" /> LinkedIn
                </Button>{" "}
                <Button
                  variant="light"
                  href="https://github.com/shreybatra"
                  target="_"
                >
                  <i className="bi bi-github" /> Github
                </Button>{" "}
                <Button
                  variant="light"
                  href="https://twitter.com/ShreyBatra"
                  target="_"
                >
                  <i className="bi bi-twitter" /> Twitter
                </Button>
              </Row>
            </Card.Body>
          </Col>
          <Col md={8}>
            <Card.Body>
              <Form onSubmit={handleOnSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        required
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => handleOnChange(e, setFirstName)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        required
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => handleOnChange(e, setLastName)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => handleOnChange(e, setEmail)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    required
                    placeholder="Regarding subject..."
                    value={subject}
                    onChange={(e) => handleOnChange(e, setSubject)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={5}
                    placeholder="You message..."
                    value={message}
                    onChange={(e) => handleOnChange(e, setMessage)}
                  />
                </Form.Group>
                <Row className="justify-content-md-center">
                  <Col md={5} className="text-center">
                    <Button type="submit">{buttonText()}</Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

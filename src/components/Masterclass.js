import axios from "axios";
import { useState } from "react";
import {
  Card,
  Col,
  Container,
  Form,
  Button,
  Row,
  ListGroup,
  Spinner,
  ListGroupItem,
} from "react-bootstrap";

export const Masterclass = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const loadingText = () => {
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
      email: email,
    };
    setLoading(true);
    axios
      .post(
        "https://ap-south-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-ebsyr/service/http/incoming_webhook/portfolio-subscribe",
        data
      )
      .then(() => {
        alert("Successfully subscribed.");
        setEmail("");
        setLoading(false);
      })
      .catch(() => {
        alert("You have already subscribed.");
        setEmail("");
        setLoading(false);
      });
  };

  return (
    <Container>
      <h1 className="display-1 text-center my-3">Shrey's Masterclass</h1>
      <Row>
        <Col md={8}>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title as="h2">Program</Card.Title>
              <Card.Text>
                This is a 2 weeks (14 days) hands-on course to learn any
                technical framework with challenge based learning. In each
                track, every day a set of topics and resources would be given to
                study, including blogs, articles, tutorials, docs, etc.
                <br />
                <br /> Along with the topics, you would also be given a daily
                challenge/task to complete which would involve practically
                implementing the day’s tasks. This would enable you to learn by
                implementation. Weekly doubt sessions would also be provided for
                better understanding.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Body>
              <Card.Title as="h2">Tracks</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>1. MongoDB - Noob to Advance</ListGroup.Item>
                <ListGroup.Item>2. Docker - Noob to Advance</ListGroup.Item>
                <ListGroup.Item>
                  3. Kubernetes - Noob to Advance (Developer focused)
                </ListGroup.Item>
                <ListGroup.Item>
                  4. API Development - Flask / Python
                </ListGroup.Item>
                <ListGroup.Item>
                  5. Cloud Computing (AWS/Azure) - Basics
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mt-3">
            <Card.Header as="h2">Details</Card.Header>
            <Card.Body>
              <strong>Next Batch:</strong> 5th September, 2021
              <br />
              <strong>Fees:</strong> INR 500/- per topic you want to enrol in.
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Header as="h2">Subscribe</Card.Header>
            <Card.Body>
              <Card.Subtitle className="mb-2">
                Interested for the next batch? Subscribe here to know when next
                batch starts..!
              </Card.Subtitle>
              <Form onSubmit={handleOnSubmit}>
                <Row>
                  <Col md={9}>
                    <Form.Control
                      className="mb-2"
                      placeholder="email"
                      type="email"
                      size="md"
                      value={email}
                      onChange={handleOnChange}
                    />
                  </Col>
                  <Col md={2} className="p-0">
                    <Button type="submit" size="md" variant="light">
                      {loadingText()}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Header as="h2">Stats</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h6>Total Students Enrolled</h6>
                  155
                </ListGroupItem>
                <ListGroupItem>
                  <h6>Total Batches</h6>4
                </ListGroupItem>
                <ListGroupItem>
                  <h6>Completion Rate</h6>
                  84%
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h1 className="display-6 text-center mt-5">Student Reviews</h1>
      <Row md={3} xs={1} className="mt-2 g-4">
        <Col>
          <Card className="h-100">
            <Card.Header>Saksham Arjani, IIIT Gwalior'22</Card.Header>
            <Card.Body>
              <Card.Text>
                I think the idea of challenge based learning is great, because
                all the resources are available online and everyone gets to know
                the action items for the day. Not just some random reading.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Header>Ritika, Software Engineer @ HSBC</Card.Header>
            <Card.Body>
              <Card.Text>
                They have been very helpful actually and are I really liked the
                style of them. Doing things by yourself. All in all good
                experience :)
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Header>
              Vivek K, Software Engineer @ Bajaj Finserv Health
            </Card.Header>
            <Card.Body>
              <Card.Text>
                It is very wholesome because.. splitting into these chunks makes
                the effort more specific. I will be able to retain it for
                comparatively longer I feel with this.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Header>
              Divyansh Srivastava, Software Engineer @ NCR Corporation
            </Card.Header>
            <Card.Body>
              <Card.Text>
                I really liked it because I got too much exposure in various
                things.!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

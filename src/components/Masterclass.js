import axios from "axios";
import { useState } from "react";
import MetaTags from "react-meta-tags";
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
  Image,
  Badge,
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
      <MetaTags>
        <title>Shrey's Masterclass</title>
        <meta name="description" content="Shrey's masterclasses...!" />
      </MetaTags>
      <h1 className="display-1 text-center my-3">Shrey's Masterclass</h1>
      <Row>
        <Col md={8}>
          <Card className="mt-3">
            <Card.Header as="h2" className="custom-background text-white">
              Masterclass Program
            </Card.Header>
            <Card.Body>
              <Card.Text>
                I teach various technologies with{" "}
                <strong>Hands-On Challenges</strong>. These are a 2 weeks (14
                days) Hands-On courses to learn any technical framework with
                challenge based learning. In each track, every day a set of
                topics and resources would be given to study, including blogs,
                articles, tutorials, docs, etc.
                <br />
                <br /> The goal everyday would be to study the day's topic
                yourself and solve the Challenge given, which would involve
                implementing the task in a language/framework. This would enable
                you to learn by implementation. Weekly{" "}
                <strong>doubt sessions</strong> would also be provided for
                better understanding.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Header as="h2" className="custom-background text-white">
              Tracks
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  1. MongoDB - Noob (Basic CRUD and Aggregation)
                </ListGroup.Item>
                <ListGroup.Item>
                  2. MongoDB - Advanced (Aggregations, Indexes and Data
                  Modelling)
                </ListGroup.Item>
                <ListGroup.Item>
                  3. Kubernetes (Application Developer)
                </ListGroup.Item>
                <ListGroup.Item>
                  4. Queue Systems and PubSub (Basics) -- Redis, Kafka and AWS
                  SQS
                </ListGroup.Item>
                <ListGroup.Item>
                  5. ElasticSearch (Basics) - Indexing, searching, Analyzers and
                  Tokenizers (based on use case)
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mt-3">
            <Card.Header as="h2" className="custom-background text-white">
              Details
            </Card.Header>
            <Card.Body>
              <strong>Next Batch:</strong> 10th December, 2021
              <br />
              <strong>Fees:</strong> INR 500/- per topic you want to enrol in.
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Header
              className="custom-background text-white border-0"
              as={Button}
              href="https://forms.gle/6i6Gyjck4yYnUhyz6"
              target="_blank"
            >
              <h2 className="my-3">Sign Up Now</h2>
            </Card.Header>

            <Card.Body className="d-none">
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
            <Card.Header as="h2" className="custom-background text-white">
              Stats
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush" className="text-center">
                <ListGroupItem>
                  <h5>Total Students Enrolled</h5>
                  <h4>
                    <Badge bg="danger">250+</Badge>
                  </h4>
                </ListGroupItem>
                <ListGroupItem>
                  <h5>Total Batches</h5>
                  <h4>
                    <Badge bg="danger">5</Badge>
                  </h4>
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h1 className="display-6 text-center mt-4">Who took my Masterclass?</h1>
      <h1 className="display-6 text-center fs-4">
        Folks from all these companies have taken my Masterclass
      </h1>
      <Row className="mt-3">
        <Col md={3} className="text-center mt-3">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
            width="50%"
          />
        </Col>
        <Col md={3} className="text-center mt-3">
          <Image
            src="https://www.backbase.com/wp-content/uploads/2020/05/Microsoft-Logo-PNG-Transparent.png"
            width="70%"
          />
        </Col>
        <Col md={3} className="text-center mt-3">
          <Image
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            width="60%"
          />
        </Col>
        <Col md={3} className="text-center mt-3">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/09/Zomato_company_logo.png"
            width="50%"
          />
        </Col>
        <Col md={3} className="text-center mt-3">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/2560px-HSBC_logo_%282018%29.svg.png"
            width="50%"
          />
        </Col>
        <Col md={3} className="text-center mt-3">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
            width="50%"
          />
        </Col>

        <Col md={3} className="text-center mt-3">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            width="50%"
          />
        </Col>

        <Col md={3} className="text-center mt-3">
          <Image
            src="https://cdn.freelogovectors.net/wp-content/uploads/2018/07/makemytrip-logo.png"
            width="50%"
          />
        </Col>
      </Row>
      <h1 className="display-6 text-center mt-1 fs-5 text-muted fs-normal">
        any many more..
      </h1>
      <h1 className="display-6 text-center mt-5">Student Reviews</h1>
      <Row md={3} xs={1} className="mt-2 g-4">
        <Col>
          <Card className="h-100">
            <Card.Header className="custom-background text-white">
              Akshita Dudani, Software Engineer @ Google
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Challenge based learning really helped me learn and explore new
                stacks and concepts. This is a unique way where it's not about
                hand holding but challenging yourself to implement the day's
                topic. Practical concepts stay with you.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Header className="custom-background text-white">
              Garima Luthra, SRE @ LinkedIn
            </Card.Header>
            <Card.Body>
              <Card.Text>
                It has been very helpful and informative. I loved the way the
                course was designed to help us have hands on experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Header className="custom-background text-white">
              Saksham Arjani, Product @ Zomato
            </Card.Header>
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
            <Card.Header className="custom-background text-white">
              Ritika, Software Engineer @ HSBC
            </Card.Header>
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
            <Card.Header className="custom-background text-white">
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
            <Card.Header className="custom-background text-white">
              Divyansh Srivastava, SWE @ NCR Corporation
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

import React from "react";
import { Card, Col, Container, Row, ListGroup } from "react-bootstrap";
import { ExpCard } from "./ExpCard";
import { MiniButton } from "./MiniButton";

export const AboutMe = () => {
  return (
    <Container>
      <h1 className="display-1 my-3 text-center">About Me</h1>
      <Container>
        <Row>
          <Col md={8}>
            <Card className="mt-3 custom-background1" border="white">
              <Card.Body>
                <Card.Title as="h2">Bio</Card.Title>
                <Card.Text>
                  Hii..! Currently I am working as a Software Engineer @
                  LinkedIn. I specialise in Software Architecture, Databases
                  Design and Data Modelling, Data Flow Automation, API
                  Development and Scaling. Currently I am focused in creating my
                  database, CrankDB, which is a ultra lightweight in memory
                  Key-Value based Document Store (150 µs avg query time, micro
                  seconds)
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="white" className="custom-background1">
              <Card.Body>
                <Card.Title as="h2">Certifications</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item className="custom-background1">
                    Certified Kubernetes Application Developer
                  </ListGroup.Item>
                  <ListGroup.Item className="custom-background1">
                    MongoDB Certified Developer Associate
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card border="white" className="custom-background1">
              <Card.Body>
                <Card.Title as="h2">Work Experience</Card.Title>
                <ListGroup variant="flush">
                  <ExpCard
                    heading="Software Engineer @ LinkedIn, Core Engineering"
                    subTitle="May 2021 - Present"
                  >
                    <ul>
                      <li>
                        Working on Data Discovery product - Datahub (Big Data
                        Apps) on metadata Search and Discovery using
                        Elasticsearch and data lineages using Neo4j, to surface
                        metadata across LinkedIn.
                      </li>
                      <li>
                        Working to support reverse regex lookup and conflict
                        resolution for 200M+ files in HDFS for GDPR compliance
                        and Purge policies. This is based on custom algorithm
                        built on TRIE and Glob patterns.
                      </li>
                    </ul>
                  </ExpCard>
                  <ExpCard
                    heading="Software Engineer 2 @ Innovaccer"
                    subTitle="January 2020 - April 2021"
                  >
                    <ul>
                      <li>
                        Wrote a custom DSL Query Engine which supports querying
                        over any data store like ElasticSearch, MongoDB, and
                        custom CSVs, abstracting the datastore within, based on
                        various complex pipelines as per business needs.
                      </li>
                      <li>
                        Designed and implemented a Workflow Engine which starts
                        individual workflows and tasks on each entity, in
                        parallel.
                      </li>
                      <li>
                        Built a fully scalable, customizable and flexible
                        Workflow Builder to define a dynamic CRM system, data
                        flow, actions and triggers to be integrated with Contact
                        Center.
                      </li>
                      <li>
                        Dockerizing and enabling CI/CD pipelines for every
                        microservice to make it ready for Kubernetes
                        environments for both Cloud and On-Prem environments.
                      </li>
                    </ul>
                  </ExpCard>
                  <ExpCard
                    heading="Software Engineer 1 @ Innovaccer"
                    subTitle="June 2019 - December 2019"
                  >
                    <ul>
                      <li>
                        Built and worked on multiple microservices using Python,
                        Django, Golang and MongoDB.
                      </li>
                      <li>
                        Helped in writing a custom Django Mongo Boilerplate with
                        support for MongoDB ODM (PyMODM) and various middlewares
                        for authentication, authorization, etc.
                      </li>
                    </ul>
                  </ExpCard>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mt-3 custom-background1">
              <Card.Header as="h2">Skills</Card.Header>
              <Card.Body>
                <Card.Subtitle className="mt-3">Languages</Card.Subtitle>
                <MiniButton>C++</MiniButton> <MiniButton>Python</MiniButton>{" "}
                <MiniButton>JAVA</MiniButton> <MiniButton>Go</MiniButton>
                <Card.Subtitle className="mt-3">Frameworks</Card.Subtitle>
                <MiniButton>Django</MiniButton> <MiniButton>RESTli</MiniButton>{" "}
                <MiniButton>Flask</MiniButton> <MiniButton>gRPC</MiniButton>{" "}
                <MiniButton>Kafka</MiniButton> <MiniButton>Celery</MiniButton>{" "}
                <MiniButton>Azure Service Bus</MiniButton>
                <Card.Subtitle className="mt-3">Databases</Card.Subtitle>
                <MiniButton>MongoDB</MiniButton>{" "}
                <MiniButton>PostgreSQL</MiniButton>{" "}
                <MiniButton>Redis</MiniButton> <MiniButton>CrankDB</MiniButton>{" "}
                <MiniButton>Elasticsearch</MiniButton>{" "}
                <MiniButton>Neo4j</MiniButton>{" "}
                <Card.Subtitle className="mt-3">
                  Cloud Computing and Devops
                </Card.Subtitle>
                <MiniButton>Azure</MiniButton> <MiniButton>AWS</MiniButton>{" "}
                <MiniButton>Docker</MiniButton>{" "}
                <MiniButton>Kubernetes</MiniButton>{" "}
                <MiniButton>Helm</MiniButton>{" "}
                <MiniButton>
                  Continuous Integration and Deployment (CI/CD)
                </MiniButton>
              </Card.Body>
            </Card>

            <Card className="mt-3 custom-background1">
              <Card.Header as="h2">Conferences</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item className="custom-background1">
                    <h6>LinkedIn Big Data Bangalore - July, 2021</h6>
                    Document Databases Data Modelling Patterns and Anti-Patterns
                  </ListGroup.Item>
                  <ListGroup.Item className="custom-background1">
                    <h6>MongoDB World Conference - July, 2021</h6>
                    Real Time Analytics using MongoDB Change Streams
                  </ListGroup.Item>
                  <ListGroup.Item className="custom-background1">
                    <h6>MongoDB World Conference (MongoDB.live) 2020</h6>
                    Migrating Heavy Cron Jobs to MongoDB Realm Triggers and
                    Worker Functions
                  </ListGroup.Item>
                  <ListGroup.Item className="custom-background1">
                    <h6>Facebook Developer Circles, June 2019</h6>
                    Slack bot and MongoDB Realm Serverless integration
                  </ListGroup.Item>
                  <ListGroup.Item className="custom-background1">
                    <h6>MongoDB MUG Delhi NCR, December 2020</h6>
                    Modelling with MongoDB
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

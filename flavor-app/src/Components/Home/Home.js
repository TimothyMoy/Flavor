import React from 'react';
import { Container, Col, Button, Row } from 'reactstrap';

function Home () {
  return(
    <Container className="hero">
      <Row>
        <Col xs="6">
      <h1>Create and Save your favorite recipes.</h1>
      <p>Find and share everyday cooking inspiration on Flavor. Discover and add recipes based on the food you love.</p>
      <Button className="btn-primary">
        <a href="/recipes">
          View Recipes
        </a>
      </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;
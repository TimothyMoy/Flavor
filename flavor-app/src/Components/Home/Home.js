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
    <img src="https://lh3.googleusercontent.com/proxy/jA3tVnT8thkMNMzGjC1dJSyFhz-om5LwSt-P76jATw0XBgSxNrKsywvAcQVvfJQrYqdBVdLGl7bMvyL6Sq2h1cbogmCAAh6dSlZ4RYI7vZdp_yCdr6XWex3ydwyGxA" id="hero"/>
    </Container>
  )
}

export default Home;
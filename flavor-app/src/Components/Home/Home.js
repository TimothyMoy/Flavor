import React from 'react';
import { Container, Col, Button, Row } from 'reactstrap';

function Home () {
  return(
    <Container classname="home">
      <Row>
        <Col xs="6">
      <h1>Create  and Save your favorite recipes.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at posuere velit. Proin pellentesque neque lacus, sit amet ullamcorper ipsum semper a. Nunc tellus lorem, commodo sit amet metus non, varius scelerisque libero. Curabitur in odio a erat tincidunt tempus. Donec nec lacus pretium, suscipit nulla sit amet, hendrerit orci.</p>
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
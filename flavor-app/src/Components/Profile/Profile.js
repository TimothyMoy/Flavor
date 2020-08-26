import React , { Component } from 'react';
import { Container, Row, Col, Button, Input, Form, FormGroup, Label } from 'reactstrap';

class Profile extends Component {
  render() {

    return (
      <Container>
      <Row>
        <Col  xs="2">
          <img src="https://picsum.photos/100" alt="profile"></img>
        </Col>
        <Col  xs="10">
          <h2>Username</h2>
          <Button>
            <a href="/recipes">
              Edit Profile
            </a>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs="4">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at posuere velit. Proin pellentesque neque lacus, sit amet ullamcorper ipsum semper a. Nunc tellus lorem, commodo sit amet metus non, varius scelerisque libero. Curabitur in odio a erat tincidunt tempus. Donec nec lacus pretium, suscipit nulla sit amet, hendrerit orci.</p>
        </Col>
        <Col xs="8">
          <Row>
            <p>Your Recipes</p>
            <p>Favorites</p>
            <Button>
              <a href="/newrecipe">Add Recipe</a>
            </Button>
          </Row>
          <div>Recipe placeholder</div>
        </Col>
      </Row>
      </Container>
    )
  }
  
}

export default Profile;
import React , { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Input, Form, FormGroup, Label } from 'reactstrap';

class Profile extends Component {
  render() {

    return (
      <Container>
      <div>
        <div>
          <h2>Username</h2>
          <img src="https://picsum.photos/200
  " alt="profile"></img>
          <p>Edit Profile</p>
        </div>
        <div>
          <div>
            About
          </div>
          <div>
            <p>Your Recipes</p>
            <p>Favorites</p>
            <div>Recipe placeholder</div>
          </div>
        </div>
      </div>
      </Container>
    )
  }
  
}

export default Profile;
import React , { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditRecipesList from '../EditRecipesList/EditRecipesList';
import NewRecipes from '../NewRecipes/NewRecipes';

class Profile extends Component {
  state ={
    isOpen:true
  }

  static propTypes ={
    auth: PropTypes.object.isRequired
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <Container>
      <Row>
        <Col xs="2">
          <img src="https://picsum.photos/100" alt="profile"></img>
        </Col>
        <Col xs="10">
          <h2>{ user ? `${user.name}`: ''}</h2>
          <Button className="btn-primary">
            <a href="/editprofile">
              Edit Profile
            </a>
          </Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs="4">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at posuere velit. Proin pellentesque neque lacus, sit amet ullamcorper ipsum semper a. Nunc tellus lorem, commodo sit amet metus non, varius scelerisque libero. Curabitur in odio a erat tincidunt tempus. Donec nec lacus pretium, suscipit nulla sit amet, hendrerit orci.</p>
        </Col>
        <Col xs="8">
          <Row className="rlist">
            <p>Your Recipes</p>
           <NewRecipes />
          </Row>
          <EditRecipesList />
        </Col>
      </Row>
      </Container>
    )
  }
  
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(Profile);
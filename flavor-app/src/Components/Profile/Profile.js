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
        <p>Let the community know a bit more about you and your recipes!</p>
        </Col>
        <Col xs="8">
          <Row className="rlist">
            <h2>Your Recipes</h2>
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
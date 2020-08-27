import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from '../Auth/RegisterModal';
import LoginModal from '../Auth/LoginModal';
import Logout from '../Auth/Logout';

class AppNavbar extends Component {
  state ={
    isOpen:false
  }

  static propTypes ={
    auth: PropTypes.object.isRequired
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <Fragment>
        <NavItem>
          <span className="navbar-text mr-3">
          <strong>
            <a href="/profile">
              { user ? `Welcome ${user.name}`: ''}
            </a>
          </strong>
          </span>
        </NavItem>
        <NavItem>
          <NavLink href="/recipes">
            Recipes
          </NavLink>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );
    
    const guestLinks = (
      <Fragment>
        <NavItem>
          <NavLink href="/recipes">
            Recipes
          </NavLink>
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
        <NavItem>
          <RegisterModal />
        </NavItem>
      </Fragment>
    );
    return (
      <div>
        <Navbar expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/"><img className="logo" src="https://lh3.google.com/u/0/d/1mpil7xzTYG52LrtVgvuGn7bwrfrlTgXu=w1440-h821-iv1"/></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                { isAuthenticated ? authLinks : guestLinks }
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavbar);
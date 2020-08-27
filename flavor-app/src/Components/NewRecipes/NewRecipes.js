import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRecipes, addRecipes } from '../../actions/recipesAction';


class RecipesModal extends Component {
  state ={
    modal: false,
    name: '',
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidMount(){
    this.props.getRecipes()
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const recipes = {
      email,
      password
    }

    const newRecipes ={
      name: this.state.name
    }

    // add item via add item action
    this.props.addRecipes(newRecipes);
  };

  render() {
    return(
      <div>
        <Button onClick={this.toggle}>
          add Recipes
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Recipes</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="recipes"
                placeholder="name"
                className="mb-3"
                onChange={this.onChange}
                />

                <Button color="dark" style={{marginTop: "2rem" }} block>
                  Add Recipes
                </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  } 
}

RecipesModal.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  recipes: state.recipes
})



export default connect(mapStateToProps, { getRecipes, addRecipes })(RecipesModal);
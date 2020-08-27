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
import { getIngredients, addIngredients } from '../../actions/ingredientsAction';


class IngredientModal extends Component {
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
    this.props.getIngredients()
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
    const ingredient = {
      email,
      password
    }

    const newIngredient ={
      name: this.state.name
    }

    // add item via add item action
    this.props.addIngredients(newIngredient);
  };

  render() {
    return(
      <div>
        <Button onClick={this.toggle}>
          add Ingredient
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Ingredient</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="ingredients"
                placeholder="name"
                className="mb-3"
                onChange={this.onChange}
                />

                <Button color="dark" style={{marginTop: "2rem" }} block>
                  Add Ingredient
                </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  } 
}

IngredientModal.propTypes = {
  getIngredients: PropTypes.func.isRequired,
  ingredients: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  ingredients: state.ingredients
})



export default connect(mapStateToProps, { getIngredients, addIngredients })(IngredientModal);
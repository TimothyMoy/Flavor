import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRecipes, addRecipes } from '../../actions/recipesAction';


class RecipesModal extends Component {
  state ={
    modal: false,
    name: '',
    subtitle: '',
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


    const newRecipes ={
      name: this.state.name,
      subtitle: this.state.subtitle,
      picture: this.state.picture,
    }

    // add item via add item action
    this.props.addRecipes(newRecipes);
  };

  render() {
    return(
      <div>
        <Button className="btn-primary" onClick={this.toggle}>
          add Recipes
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Recipes</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <Label for="name">Title</Label>
              <Input
                type="text"
                name="name"
                id="recipes"
                placeholder="title"
                className="mb-3"
                onChange={this.onChange}
                />

              <Label for="subtitle">Body</Label>
                <Input
                type="textarea"
                name="subtitle"
                id="recipes"
                placeholder="body"
                className="mb-3"
                onChange={this.onChange}
                />

                <Label for="picture">Image Link</Label>
                <Input
                type="text"
                name="picture"
                id="recipes"
                placeholder="image Link"
                className="mb-3"
                onChange={this.onChange}
                />

                <Button  className="btn-primary" style={{marginTop: "2rem" }} block>
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
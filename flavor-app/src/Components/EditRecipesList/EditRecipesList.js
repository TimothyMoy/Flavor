import React, { Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button, Input, Form, FormGroup, Label } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getRecipes, deleteRecipes, addRecipes } from '../../actions/recipesAction';
import PropTypes from 'prop-types';
import NewRecipes from '../NewRecipes/NewRecipes';


class EditRecipesList extends Component {
  
  componentDidMount(){
    this.props.getRecipes()
  };

  onDeleteClick = (id) => {
    this.props.deleteRecipes(id);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();

    const newRecipes ={
      name: this.state.name
    }

    // add item via add item action
    this.props.addRecipes(newRecipes);
  }


  render() {
    const { recipes } = this.props.recipes;
    return (
      <Container>
      <div>
        <NewRecipes></NewRecipes>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="recipes">Recipes</Label>
            <Input
              type="text"
              name="name"
              id="recipes"
              placeholder="Add Recipes"
              onChange={this.onChange}
              />
            <Button
            color='dark'
            style={{marginTop: '2rem'}}
            >
              Add Recipes
            </Button>
          </FormGroup>
        </Form>
        <ListGroup>
          <TransitionGroup className="recipes-list">
            {recipes.map(({_id,name}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button 
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >&times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </div>
      </Container>
    )
  }
}

EditRecipesList.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  recipes: state.recipes
})

export default connect(mapStateToProps, {getRecipes, deleteRecipes, addRecipes})(EditRecipesList);
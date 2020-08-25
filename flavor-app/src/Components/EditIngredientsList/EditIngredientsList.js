import React, { Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button, Input, Form, FormGroup, Label } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getIngredients, deleteIngredients, addIngredients } from '../../actions/ingredientsAction';
import PropTypes from 'prop-types';
import ingredientReducer from '../../reducers/ingredientReducer';
import { v1 as uuid } from 'uuid';


class EditIngredientsList extends Component {
  
  componentDidMount(){
    this.props.getIngredients()
  };

  onDeleteClick = (id) => {
    this.props.deleteIngredients(id);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();

    const newIngredient ={
      id: uuid(),
      name: this.state.name
    }

    // add item via add item action
    this.props.addIngredients(newIngredient);
  }


  render() {
    const { ingredients } = this.props.ingredients;
    return (
      <Container>
      <div>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="item">Ingredients</Label>
            <Input
              type="text"
              name="name"
              id="ingredients"
              placeholder="Add Ingredient"
              onChange={this.onChange}
              />
            <Button
            color='dark'
            style={{marginTop: '2rem'}}
            >
              Add Item
            </Button>
          </FormGroup>
        </Form>
        <ListGroup>
          <TransitionGroup className="ingredients-list">
            {ingredients.map(({id,name}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button 
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, id)}
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

EditIngredientsList.propTypes = {
  getIngredients: PropTypes.func.isRequired,
  ingredients: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  ingredients: state.ingredients
})

export default connect(mapStateToProps, {getIngredients, deleteIngredients, addIngredients})(EditIngredientsList);
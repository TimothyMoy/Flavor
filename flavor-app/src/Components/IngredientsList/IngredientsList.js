import React, { Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button, Input, Form, FormGroup, Label } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getIngredients, deleteIngredients, addIngredients } from '../../actions/ingredientsAction';
import PropTypes from 'prop-types';
import ingredientReducer from '../../reducers/ingredientReducer';



class IngredientsList extends Component {
  
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
       
        <ListGroup>
          <TransitionGroup className="ingredients-list">
            {ingredients.map(({_id,name}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
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

IngredientsList.propTypes = {
  getIngredients: PropTypes.func.isRequired,
  ingredients: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  ingredients: state.ingredients
})

export default connect(mapStateToProps, {getIngredients, deleteIngredients, addIngredients})(IngredientsList);
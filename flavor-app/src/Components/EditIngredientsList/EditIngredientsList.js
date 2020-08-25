import React, { Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getIngredients, deleteIngredients } from '../../actions/ingredientsAction';
import PropTypes from 'prop-types';
import ingredientReducer from '../../reducers/ingredientReducer';


class EditIngredientsList extends Component {
  
  componentDidMount(){
    this.props.getIngredients()
  }

  render() {
    const { ingredients } = this.props.ingredients;
    return (
      <Container>
      <div>
        <Button 
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() =>{
            const name = prompt('Enter Ingredient');
            if(name) {
              this.setState(state => ({
                // recipes: [...this.props.recipes, { id: uuid(), name }]
              }));
            }
          }}>Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="ingredients-list">
            {ingredients.map(({id,name}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button 
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={()=> {
                      this.setState(state => ({
                        ingredients: this.props.ingredients.filter(ingredients => ingredients.id !== id)
                      }));
                    }}
                  >&times;</Button>
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

export default connect(mapStateToProps, {getIngredients,deleteIngredients})(EditIngredientsList);
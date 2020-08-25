import React, { Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getRecipes, deleteRecipes } from '../../actions/recipesAction';
import PropTypes from 'prop-types';

class RecipesList extends Component {
  
  componentDidMount(){
    this.props.getRecipes()
  }

  render() {
    const { recipes } = this.props.recipes;
    return (
      <Container>
      <div>
        New Recipes
        <div>
          <img src='https://picsum.photos/200' alt='Food'/>
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at posuere velit. Proin pellentesque neque lacus, sit amet ullamcorper ipsum semper a. Nunc tellus lorem, commodo sit amet metus non, varius scelerisque libero. Curabitur in odio a erat tincidunt tempus. Donec nec lacus pretium, suscipit nulla sit amet, hendrerit orci.</p>
          <button>
            <a href="/recipe">
              View Recipe
            </a>
          </button>
        </div>
      </div>
        <Button 
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() =>{
            const name = prompt('Enter Recipe');
            if(name) {
              this.setState(state => ({
                recipes: [...state.recipes, { id: uuid(), name }]
              }));
            }
          }}>Add Item</Button>
          <ListGroup>
            <TransitionGroup className="recipe-list">
              {recipes.map(({id,name}) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Button 
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={()=> {
                        this.setState(state => ({
                          recipes: state.recipes.filter(recipes => recipes.id !== id)
                        }));
                      }}
                    >&times;</Button>
                    {name}
                    </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
      </Container>
    )
  }
}

RecipesList.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  recipes: state.recipes
})

export default connect(mapStateToProps, {getRecipes,deleteRecipes})(RecipesList);
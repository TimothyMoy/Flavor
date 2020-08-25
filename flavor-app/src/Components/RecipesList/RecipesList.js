import React, { Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getRecipes, deleteRecipes } from '../../actions/recipesAction';
import PropTypes from 'prop-types';

class RecipesList extends Component {
 
  render() {
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
        
      </Container>
    )
  }
}



export default RecipesList;
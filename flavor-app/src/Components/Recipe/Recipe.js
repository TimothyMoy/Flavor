import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import EditIngredientsList from '../EditIngredientsList/EditIngredientsList';
import IngredientsList from '../IngredientsList/IngredientsList';

class Recipe extends Component {
  render() {
    return(
      <Container>
      <div>
        <h1>Sheet Pan Cauliflower Bake</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at posuere velit. Proin pellentesque neque lacus, sit amet ullamcorper ipsum semper a. Nunc tellus lorem, commodo sit amet metus non, varius scelerisque libero. Curabitur in odio a erat tincidunt tempus. Donec nec lacus pretium, suscipit nulla sit amet, hendrerit orci.
        </p>
        <div>
          <img src="https://picsum.photos/50
  " alt="profile"/>
          <p>by Username</p>
          <button>Favorite</button>
        </div>
        <div>
          <img src="https://picsum.photos/200" alt="food hero" />
          <div>
          <EditIngredientsList />
          </div>
          <div>
            <p>
              Directions
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at posuere velit. Proin pellentesque neque lacus, sit amet ullamcorper ipsum semper a. Nunc tellus lorem, commodo sit amet metus non, varius scelerisque libero. Curabitur in odio a erat tincidunt tempus. Donec nec lacus pretium, suscipit nulla sit amet, hendrerit orci.
            </p>
          </div>
          <IngredientsList></IngredientsList>
        </div>
      </div>
      </Container>
    )
  }
}

export default Recipe;
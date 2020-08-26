import React, { Component} from 'react';
import { Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getRecipes, deleteRecipes } from '../../actions/recipesAction';
import PropTypes from 'prop-types';

class RecipesList extends Component {
 
  render() {
    return (
      <Container>
        <div>
          <h1>New Recipes</h1>
          <Col xs="3">
            <Card>
              <CardImg top width="10%" src="https://picsum.photos/100" alt="Food image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button><a href="/recipe">View Recipe</a></Button>
              </CardBody>
            </Card>
          </Col>
      </div>
      </Container>
    )
  }
}



export default RecipesList;
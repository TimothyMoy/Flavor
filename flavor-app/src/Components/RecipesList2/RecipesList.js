import React, { Component} from 'react';
import { Container, Card, CardImg, CardText, CardBody,
  CardTitle, Col, Button, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { getRecipes, deleteRecipes, addRecipes } from '../../actions/recipesAction';
import PropTypes from 'prop-types';

class RecipesList extends Component {

  render() {
     const { recipes } = this.props.recipes;
    return (
      <Container>
        <h1>
        { recipes.map(({_id,title}) => (
          {title}
        ))}
        </h1>
        <div>
          <h1>New Recipes</h1>
          <Row>
          <Col xs="3">
            <Card>
              <CardTitle>French Toast</CardTitle>
              <CardImg top width="10%" src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80" alt="Food image cap" />
              <CardBody>
                <CardText>There are many, fancy variations on this basic recipe. This recipe works with many types of bread - white, whole wheat, cinnamon-raisin, Italian or French. Serve hot with butter or margarine and maple syrup.</CardText>
                <Button><a href="/recipe">View Recipe</a></Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="3">
            <Card>
              <CardTitle>French Toast</CardTitle>
              <CardImg top width="10%" src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80" alt="Food image cap" />
              <CardBody>
                <CardText>There are many, fancy variations on this basic recipe. This recipe works with many types of bread - white, whole wheat, cinnamon-raisin, Italian or French. Serve hot with butter or margarine and maple syrup.</CardText>
                <Button><a href="/recipe">View Recipe</a></Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="3">
            <Card>
              <CardTitle>French Toast</CardTitle>
              <CardImg top width="10%" src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80" alt="Food image cap" />
              <CardBody>
                <CardText>There are many, fancy variations on this basic recipe. This recipe works with many types of bread - white, whole wheat, cinnamon-raisin, Italian or French. Serve hot with butter or margarine and maple syrup.</CardText>
                <Button><a href="/recipe">View Recipe</a></Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="3">
            <Card>
              <CardTitle>French Toast</CardTitle>
              <CardImg top width="10%" src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80" alt="Food image cap" />
              <CardBody>
                <CardText>There are many, fancy variations on this basic recipe. This recipe works with many types of bread - white, whole wheat, cinnamon-raisin, Italian or French. Serve hot with butter or margarine and maple syrup.</CardText>
                <Button><a href="/recipe">View Recipe</a></Button>
              </CardBody>
            </Card>
          </Col>
          </Row>
      </div>
      </Container>
    )
  }
}

RecipesList.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  recipes: state.recipes
})

export default connect(mapStateToProps, {getRecipes,deleteRecipes, addRecipes})(RecipesList);
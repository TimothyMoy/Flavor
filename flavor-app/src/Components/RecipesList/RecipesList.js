import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { Container, ListGroup, Col, Button, Row, Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getRecipes, deleteRecipes, addRecipes, findRecipes } from '../../actions/recipesAction';
import PropTypes from 'prop-types';


class RecipesList extends Component {
  
  componentDidMount(){
    this.props.getRecipes()
  };

  render() {
    const { recipes } = this.props.recipes;
    console.log(recipes);
    return (
      <Container>
      <div>
        <h3>New Recipes</h3>
        <ListGroup>
          <TransitionGroup className="recipes-list">
            <Row>
            {recipes.map(({_id,name, picture, subtitle}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                    <Col xs="3">
                    <Card>
                    <CardTitle>{name}</CardTitle>
                    <CardImg top width="10%" src={`${picture}`} alt="Food image cap" />
                    <CardBody>
                    <CardText> {subtitle}</CardText>
                    <Button className="btn-primary"><Link to="/recipe">View Recipe</Link></Button>
                    </CardBody>
                    </Card>
                    </Col>
              </CSSTransition>
            ))}
            </Row>
          </TransitionGroup>
        </ListGroup>
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

export default connect(mapStateToProps, {getRecipes})(RecipesList);
import React, { Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button, Input, Form, FormGroup, Label, Col, Row } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getRecipes, deleteRecipes, addRecipes } from '../../actions/recipesAction';
import PropTypes from 'prop-types';
import RecipeReducer from '../../reducers/recipeReducer';



class newRecipeForm extends Component {
  
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
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Row>
            <Col>
              <Label for="item">Recipe</Label>
              <Button
              color='dark'
              style={{marginTop: '2rem'}}
              >
                Add Recipe
              </Button>
            </Col>
            </Row>
            <Row>
            <Input
              type="text"
              name="title"
              id="recipes"
              placeholder="Add title"
              onChange={this.onChange}
              />
              <Input
              type="text"
              name="title"
              id="recipes"
              placeholder="Add body"
              onChange={this.onChange}
              />
            </Row>
            <img src="https://picsum.photos/200" alt="food hero" />
            <Row>
              <Col>
              <p>ingredients</p>
                <Input
                  type="text"
                  name="title"
                  id="recipes"
                  placeholder="Add ingredients"
                  onChange={this.onChange}
                  />
              </Col>
              <Col>
                <p>Directions</p>
                <Input
                type="text"
                name="title"
                id="recipes"
                placeholder="Add instructions"
                onChange={this.onChange}
                />
              </Col>
            </Row>
          </FormGroup>
        </Form>
        <ListGroup>
          <TransitionGroup className="recipe-list">
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
      </Container>
    )
  }
}

newRecipeForm.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  recipes: state.recipes
})

export default connect(mapStateToProps, {getRecipes, deleteRecipes, addRecipes})(newRecipeForm);
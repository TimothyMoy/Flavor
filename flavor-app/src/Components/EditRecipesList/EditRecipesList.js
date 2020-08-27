import React, { Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button, Row, Col, Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getRecipes, deleteRecipes, addRecipes } from '../../actions/recipesAction';
import PropTypes from 'prop-types';
import NewRecipes from '../NewRecipes/NewRecipes';


class EditRecipesList extends Component {
  
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
      name: this.state.name,
      subtitle: this.state.subtitle,
      picture: this.state.picture
    }

    // add item via add item action
    this.props.addRecipes(newRecipes);
  }


  render() {
    const { recipes } = this.props.recipes;
    return (
      <Container>
      <div>
        <ListGroup>
          <TransitionGroup className="recipes-list">
            {recipes.map(({_id,name,subtitle, picture}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <Row>
                  <Col xs="4">
                    <Button 
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >&times;
                    </Button>
                    <Card>
                    <CardTitle>{name}</CardTitle>
                    <CardImg top width="10%" src={`${picture}`} alt="Food image cap" />
                    <CardBody>
                    <CardText> {subtitle}</CardText>
                    <Button><a href="/recipe">View Recipe</a></Button>
                    </CardBody>
                    </Card>
                    </Col>
                </Row>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </div>
      </Container>
    )
  }
}

EditRecipesList.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  recipes: state.recipes
})

export default connect(mapStateToProps, {getRecipes, deleteRecipes, addRecipes})(EditRecipesList);
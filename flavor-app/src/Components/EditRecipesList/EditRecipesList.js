import React, { Component} from 'react';
import { Container, Button, Row, Col, Card, CardTitle, CardImg, CardBody, CardText, Modal, ModalHeader,ModalBody,Form,Label, Input } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getRecipes, deleteRecipes, addRecipes, putRecipes } from '../../actions/recipesAction';
import PropTypes from 'prop-types';
import UpdateRecipes from '../UpdateRecipes/UpdateRecipes';


class EditRecipesList extends Component {
  state ={
    modal: false,
    name: '',
    subtitle: '',
    picture: ''
  };
  
  componentDidMount(){
    this.props.getRecipes()
  };
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      name: this.state.name,
      subtitle: this.state.subtitle,
      picture: this.state.picture
    });
  };

  onDeleteClick = (id) => {
    this.props.deleteRecipes(id);
  };

  onUpdateClick = (id) => {
    this.props.putRecipes(id);
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
        <Row>
          <TransitionGroup className="recipes-list">
            {recipes.map(({_id,name,subtitle, picture}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                  <Col xs="4">
                    <Card>
                    <CardTitle>{name}</CardTitle>
                    <CardImg top width="10%" src={`${picture}`} alt="Food image cap" />
                    <CardBody>
                    <CardText> {subtitle}</CardText>
                    <Button className="btn-primary"><a href="/recipe">View Recipe</a></Button>
                    </CardBody>
                    </Card>
                    <div className="edit-btns">
                    <Button 
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >Delete
                    </Button>
                    <Button className="update-btn btn-sm" onClick={this.toggle}>
          Update
        </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Update Recipe</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.onSubmit}>
                <Label for="name">Title</Label>
                <Input
                  type="text"
                  name="name"
                  id="recipes"
                  placeholder="title"
                  className="mb-3"
                  onChange={this.onChange}
                  value={name}
                  />

                <Label for="subtitle">Body</Label>
                  <Input
                  type="textarea"
                  name="subtitle"
                  id="recipes"
                  placeholder="body"
                  className="mb-3"
                  onChange={this.onChange}
                  value={subtitle}
                  />

                  <Label for="picture">Image Link</Label>
                  <Input
                  type="text"
                  name="picture"
                  id="recipes"
                  placeholder="image Link"
                  className="mb-3"
                  onChange={this.onChange}
                  value={picture}
                  />
              
                  <Button  className="btn-primary" style={{marginTop: "2rem" }} block>
                    Update Recipe
                  </Button>
              </Form>
            </ModalBody>
          </Modal>
                    </div>
                  </Col>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </Row>
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
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Recipes extends Component {
  render() {
    return(
      <Container>
      <div>
        <h1>Broccoli Salad</h1>
        <p>This is a yummy summer salad that uses an interesting combination of fruits, vegetables and meats.
        </p>
        <div>
          <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="food hero" />
          </div>
          </div>
          <Row>
        <Col xs="4">
        <h2>Ingredients</h2>
        <ul>
          <li>4 cups fresh broccoli florets</li>
          <li>¼ cup red onion, finely diced</li>
          <li>3 tablespoons raisins</li>
          <li>2 tablespoons dry roasted sunflower seeds</li>
          <li>¼ cup plain yogurt</li>
          <li>2 tablespoons orange juice</li>
          <li>1 tablespoon fat-free mayonnaise</li>
        </ul>
        </Col>
        <Col xs="8">
          <Row className="rlist">
            <h2>Directions</h2>
            <ul>
            <li>
            Step 1
Combine the broccoli, onions, raisins, and sunflower seeds.
              </li>
              <li>
              Step 2
In a small bowl, whisk the yogurt, orange juice, and mayonnaise until blended. Pour over the broccoli mixture and toss to coat.
              </li>
            </ul>
          </Row>
        </Col>
      </Row>
      <hr></hr>
      <Link to="/recipes">Back to recipes</Link>
      <div id="spacer"></div>
      </Container>
    )
  }
}

export default Recipes;
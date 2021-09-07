import React, { Component } from 'react';
import {Col,Card,Button} from 'react-bootstrap';

class Chocolate extends Component {
    render() {
        return (
            <Col>
            <Card>
              <Card.Img variant="top" src={this.props.chocolate.img} />
              <Card.Body>
                <Card.Title>{this.props.chocolate.name}</Card.Title>
                <Button variant="primary" onClick={()=>this.props.addToFav(this.props.chocolate)}>Add To Fav</Button>
              </Card.Body>
            </Card>
          </Col>
        );
    }
}

export default Chocolate;

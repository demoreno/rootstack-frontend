import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from '../../components/Header';

export default class Barbecues extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src="https://www.thedailymash.co.uk/wp-content/uploads/barbecue-2.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src="https://www.thedailymash.co.uk/wp-content/uploads/barbecue-2.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src="https://www.thedailymash.co.uk/wp-content/uploads/barbecue-2.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        ;
      </div>
    );
  }
}

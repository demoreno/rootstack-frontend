import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { getBarbecues } from '../../actions/Barbecue';
import Header from '../../components/Header';

class Barbecues extends Component {
  componentDidMount() {
    this.props.getBarbecues();
  }

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

const mapStateToProps = state => {
  return {
    tweets: state.items,
  };
};

const mapDispatchToProps = { getBarbecues };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Barbecues);

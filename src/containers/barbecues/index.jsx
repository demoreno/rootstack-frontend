import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { getBarbecues } from '../../actions/Barbecue';
import { setPosition } from '../../actions/Global';
import Header from '../../components/Header';

class Barbecues extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.props.setPosition({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
      this.props.getBarbecues(pos.coords.latitude, pos.coords.longitude);
    });
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
    position: state.Global.position,
  };
};

const mapDispatchToProps = { getBarbecues, setPosition };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Barbecues);

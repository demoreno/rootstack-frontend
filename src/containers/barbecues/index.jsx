import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import moment from 'moment';
import { DatetimePicker } from 'rc-datetime-picker';
import { getBarbecues } from '../../actions/Barbecue';
import { setPosition } from '../../actions/Global';
import Header from '../../components/Header';
import './index.scss';

class Barbecues extends Component {
  state = {
    initDate: '',
    finishDate: '',
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.props.setPosition({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
      this.props.getBarbecues(pos.coords.latitude, pos.coords.longitude);
    });
    console.log(this.props.match.params);
  }

  handleBooking(e, public_id) {
    window.location.replace('/barbecues/' + public_id);
  }

  handleChange = date => {
    this.setState({
      date,
    });
  };

  renderBarbecue(key) {
    const { barbecues } = this.props;
    const barbecue = barbecues[key];

    return (
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={barbecue.image} />
          <Card.Body>
            <Card.Title>{barbecue.name}</Card.Title>
            <Card.Text>
              {barbecue.model}
              {barbecue.description}
            </Card.Text>
            <Button
              variant="primary"
              onClick={e => this.handleBooking(e, barbecue._id)}
            >
              Booking
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  render() {
    const { barbecues } = this.props;
    console.log(barbecues);
    console.log(this.props.match.params.id);
    return (
      <div>
        <Header />
        <Container>
          {!this.props.match.params.id && (
            <Row>
              {barbecues.length > 0 &&
                Object.keys(barbecues).map(e => this.renderBarbecue(e))}
            </Row>
          )}
          {this.props.match.params.id && (
            <DatetimePicker
              moment={moment()}
              onChange={e => this.handleChange(e)}
            />
          )}
        </Container>
        ;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    position: state.Global.position,
    barbecues: state.Barbecue.barbecues,
  };
};

const mapDispatchToProps = { getBarbecues, setPosition };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Barbecues);

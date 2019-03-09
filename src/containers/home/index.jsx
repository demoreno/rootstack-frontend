import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import HomePropTypes from '../../proptypes/Home.proptypes';
import Header from '../../components/Header';
import UserForm from '../../components/UserForm';
import BarbecueForm from '../../components/BarbecueForm';
import { setPosition } from '../../actions/Global';
import './index.scss';

class Home extends Component {
  state = {
    typeForm: '',
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.props.setPosition({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }

  handleButton(typeForm) {
    this.setState({
      typeForm,
    });
  }

  render() {
    const { typeForm } = this.state;
    return [
      <Header />,
      <div className="app-container">
        <Form inline>
          <Button
            variant="outline-success"
            onClick={() => this.handleButton('register')}
          >
            Register
          </Button>
          <Button
            variant="outline-success"
            onClick={() => this.handleButton('barbecue')}
          >
            Barbecue
          </Button>
        </Form>
        <div className="form-container">
          {typeForm === 'register' && <UserForm />}
          {typeForm === 'barbecue' && <BarbecueForm />}
        </div>
      </div>,
    ];
  }
}

Home.propTypes = HomePropTypes;

const mapStateToProps = state => {
  return {
    tweets: state.items,
  };
};

const mapDispatchToProps = { setPosition };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

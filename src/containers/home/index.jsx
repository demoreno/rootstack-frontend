import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import UserForm from '../../components/UserForm';
import BarbecueForm from '../../components/BarbecueForm';
import LoginForm from '../../components/LoginForm';
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
    const token = localStorage.getItem('token');
    return [
      <Header />,
      <div className="app-container">
        <Form inline>
          {!token && [
            <Button
              variant="outline-success"
              onClick={() => this.handleButton('register')}
            >
              SignUp
            </Button>,
            <Button
              variant="outline-success"
              onClick={() => this.handleButton('login')}
            >
              Login
            </Button>,
          ]}
          {token && [
            <Button
              variant="outline-success"
              onClick={() => this.handleButton('barbecue')}
            >
              Barbecue
            </Button>,
          ]}
        </Form>
        <div className="form-container">
          {typeForm === 'register' && <UserForm />}
          {typeForm === 'barbecue' && <BarbecueForm />}
          {typeForm === 'login' && <LoginForm />}
        </div>
      </div>,
    ];
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = { setPosition };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

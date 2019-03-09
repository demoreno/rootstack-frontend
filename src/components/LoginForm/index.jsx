import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { login } from '../../actions/User';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm() {
    const { username, password } = this.state;
    this.props.login({
      username,
      password,
    });
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="username"
            type="email"
            placeholder="Enter email"
            onChange={e => this.handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={e => this.handleChange(e)}
          />
        </Form.Group>
        <Button variant="primary" onClick={e => this.submitForm(e)}>
          Submit
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    tweets: state.items,
  };
};

const mapDispatchToProps = { login };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

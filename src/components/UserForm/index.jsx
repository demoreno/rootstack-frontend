import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addUser } from '../../actions/User';
import './index.scss';

class UserForm extends Component {
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm() {
    console.log('submit');
    const { firstName, lastName, zipCode, email } = this.state;
    this.props.addUser({
      firstName,
      lastName,
      zipCode,
      email,
    });
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="firstName"
            placeholder="Nombre"
            onChange={e => this.handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            name="lastName"
            placeholder="Apellido"
            onChange={e => this.handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicZip">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            name="zipCode"
            placeholder="Zip Code"
            onChange={e => this.handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={e => this.handleChange(e)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          onClick={e => this.submitForm(e)}
        >
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

const mapDispatchToProps = { addUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserForm);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addBarbecue } from '../../actions/Barbecue';

class BarbecueForm extends Component {
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm() {
    console.log('submit');
    const { name, model, description } = this.state;
    this.props.addBarbecue({
      name,
      model,
      description,
    });
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="name"
            placeholder="Nombre"
            onChange={e => this.handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Modelo</Form.Label>
          <Form.Control
            name="model"
            placeholder="Modelo"
            onChange={e => this.handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicZip">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            name="decription"
            placeholder="Descripción"
            onChange={e => this.handleChange(e)}
          />
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

const mapDispatchToProps = { addBarbecue };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BarbecueForm);

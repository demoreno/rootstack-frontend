import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addBarbecue } from '../../actions/Barbecue';
import { initialState } from '../../reducers/Barbecue';

class BarbecueForm extends Component {
  state = {
    initialState,
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm() {
    const { name, model, description, latitude, longitude } = this.state;
    this.props.addBarbecue({
      name,
      model,
      description,
      latitude,
      longitude,
    });
    this.setState(initialState);
  }

  render() {
    const { name, model, description, latitude, longitude } = this.state;

    return (
      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="name"
            placeholder="Nombre"
            value={name}
            onChange={e => this.handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Modelo</Form.Label>
          <Form.Control
            name="model"
            value={model}
            placeholder="Modelo"
            onChange={e => this.handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicZip">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            value={description}
            name="decription"
            placeholder="Descripción"
            onChange={e => this.handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicZip">
          <Form.Label>Latitud</Form.Label>
          <Form.Control
            name="latitude"
            value={latitude}
            placeholder="Latitud"
            onChange={e => this.handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicZip">
          <Form.Label>Longitud</Form.Label>
          <Form.Control
            name="longitude"
            value={longitude}
            placeholder="Longitud"
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

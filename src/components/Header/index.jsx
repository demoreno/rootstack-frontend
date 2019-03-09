import React, { Component } from 'react';
import { Navbar, Nav, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/User';

class Header extends Component {
  render() {
    const { alert } = this.props;
    const token = localStorage.getItem('token');

    return [
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Rootstack Barbecue</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/barbecues">Barbecues</Nav.Link>
            <Nav.Link href="/my-barbecues">My Barbecues</Nav.Link>
            {token && <Nav.Link onClick={this.props.logout}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>,
      <div>{alert && <Alert variant={alert.type}>{alert.message}</Alert>}</div>,
    ];
  }
}

const mapStateToProps = state => {
  return {
    alert: state.Global.alert,
  };
};

const mapDispatchToProps = { logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePropTypes from '../../proptypes/Home.proptypes';
import Header from '../../components/Header';
import './index.scss';

class Home extends Component {
  state = {
    isOpen: false,
    value: 1,
  };

  handle(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return <Header />;
  }
}

Home.propTypes = HomePropTypes;

const mapStateToProps = state => {
  return {
    tweets: state.items,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

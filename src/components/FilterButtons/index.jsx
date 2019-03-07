import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { filterTweets } from './../../actions/Tweets';
import './index.scss';

class FilterButtons extends Component {
  state = {
    isOpen: false
  };

  filter(value) {
    console.log(value);
    this.props.filterTweets(value);
  }

  render() {
    return (
      <div className="filter-container">
        <Button color="success" onClick={() => this.filter('verdadero')}>
          Verdadero
        </Button>
        <Button color="secondary" onClick={() => this.filter('impreciso')}>
          Impreciso
        </Button>
        <Button color="danger" onClick={() => this.filter('falso')}>
          Falso
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tweets: state.Tweets.tweets
  };
};

const mapDispatchToProps = { filterTweets };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterButtons);

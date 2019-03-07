import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Alert
} from 'reactstrap';
import { filterTweets } from './../../actions/Tweets';
import './index.scss';

const status = {
  verdadero: 'success',
  falso: 'danger',
  impreciso: 'secondary'
};

class ShowTweets extends Component {
  state = {
    isOpen: false
  };

  renderTweets(key) {
    const row = this.props.tweets[key];
    console.log(row);

    if (row.type != '') {
      return (
        <Card>
          <CardBody>
            <CardTitle>
              <img src={row.image} className="profile-image" />
            </CardTitle>
            <CardSubtitle>
              <span>{row.twitter}</span>
              <br />
              <span>{row.name}</span>
            </CardSubtitle>
            <CardText>{row.text}</CardText>
            <Alert color={status[row.type]}>{row.type}</Alert>
          </CardBody>
        </Card>
      );
    }
    return;
  }

  render() {
    return (
      <div className="show-tweets-container">
        {Object.keys(this.props.tweets).map(this.renderTweets.bind(this))}
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
)(ShowTweets);

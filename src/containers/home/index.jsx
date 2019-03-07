import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './../../components/Header';
import FilterButtons from '../../components/FilterButtons';
import HomePropTypes from '../../proptypes/Home.proptypes';
import { Container, Row, Col } from 'reactstrap';
import { filterTweets } from './../../actions/Tweets';
import './index.scss';
import ShowTweets from '../../components/ShowTweets';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider'

class Home extends Component {
  state = {
    isOpen: false,
    value : 1
  };

  handle(event){
    console.log('hanlde');
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
  }
  

  render() {
    const wrapperStyle = { width: 400, margin: 50 };
    return [
      <Header />,
      <div style={wrapperStyle} className="home-container">
       <p>Slider with custom2 handle</p>
       <input 
          id="typeinp" 
          type="range" 
          min="0" max="100" 
          defaultValue={this.state.value} 
          value={this.state.value} 
          onChange={this.handle.bind(this)}
          step="1"/>
        
      </div>
    ];
  }
}

Home.propTypes = HomePropTypes;

const mapStateToProps = (state) => {
  return {
    tweets: state.items
  };
};

const mapDispatchToProps = { filterTweets };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

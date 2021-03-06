import React, { Component } from 'react';
import { Loading } from 'arwes';
import {
  BrowserView,
  MobileView,
} from "react-device-detect";
import './Countdown.css';

const second = 1000
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

export default class Countdown extends Component {
  state = {
    releaseDate: new Date('Dec 10, 2020 00:00:00').getTime(),
    daysToRelease: null,
    hoursToRelease: null,
    minutesToRelease: null,
    secondsToRelease: null,
    loading: true
  }

  componentDidMount() {
    // Update every 1 sec
    this.interval = setInterval(() => {
      let now = new Date().getTime();
      let distance = this.state.releaseDate - now;

      if (distance <= 0) {
        clearInterval(this.interval);
        // Tell App.js that released is now true
        this.props.releaseHandler(true);
      }

      this.setState({
        daysToRelease: Math.floor(distance / (day)),
        hoursToRelease: Math.floor((distance % (day)) / (hour)),
        minutesToRelease: Math.floor((distance % (hour)) / (minute)),
        secondsToRelease: Math.floor((distance % (minute)) / second),
        loading: false
      });
    }, 1000);
  }

  // To prevent leaving errors and leaking memory
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Countdown">
        {this.state.loading ?
          <Loading animate />
          :
          <div>
            <BrowserView>
              <ul>
                <li><span>{this.state.daysToRelease}</span> Days</li>
                <li><span>{this.state.hoursToRelease}</span> Hours</li>
                <li><span>{this.state.minutesToRelease}</span> Minutes</li>
                <li><span>{this.state.secondsToRelease}</span> Seconds</li>
              </ul>
            </BrowserView>
            <MobileView>
              <ul style={{display: 'inline-block', margin: '0', padding: '0'}}>
                <li><span>{this.state.daysToRelease}</span> Days</li>
                <li><span>{this.state.hoursToRelease}</span> Hours</li>
                <li><span>{this.state.minutesToRelease}</span> Minutes</li>
                <li><span>{this.state.secondsToRelease}</span> Seconds</li>
              </ul>
            </MobileView>
          </div>
        }
      </div>
    )
  }
}

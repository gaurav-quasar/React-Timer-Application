var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm')

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count:0,
      countdownStatus: 'Stopped'
    };
  },
  componentDidUpdate: function (oldProps, oldState) {
    if (this.state.countdownStatus != oldState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'Started':
          this.startTimer();
          break;
        case 'Stopped':
          this.stopTimer();
          break;
        default:

      }
    }
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      if (newCount > 0) {
        this.setState({
          count: newCount
        });
      } else {
        this.setState({
          count: 0,
          countdownStatus: 'Stopped'
        });
      }
    }, 1000);
  },
  stopTimer: function () {
    clearInterval(this.timer);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'Started'
    });
  },
  render: function () {
    var {count} = this.state;

    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;

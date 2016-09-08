var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
          this.setState({
            count: 0
          });
          this.stopTimer();
          break;
        case 'Paused':
          this.stopTimer();
          break;
        default:

      }
    }
  },
  componentWillMount: function () {
    console.log('componentWillMount');
  },
  componentDidMount: function () {
    console.log('componentDidMount');
  },
  componentWillUnMount: function () {
    console.log('componentWillUnMount');
    this.stopTimer();
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
          countdownStatus: 'Stopped'
        });
      }
    }, 1000);
  },
  stopTimer: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'Started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },
  render: function () {
    var {count, countdownStatus} = this.state;

    var renderControlArea = () => {
      if (countdownStatus === 'Stopped') {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      } else {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      }
    };

    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;

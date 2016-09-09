var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'Stopped'
    };
  },
  componentDidUpdate: function (oldProps, oldState) {
    if (this.state.countdownStatus !== oldState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'Started':
          this.startTimer();
          break;
        case 'Stopped':
          this.setState({
            count: 0
          });
        case 'Paused':
          this.stopTimer();
          break;
        default:
      }
    }
  },
  componentWillUnMount: function () {
    console.log('componentWillUnMount');
    this.stopTimer();
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  },
  stopTimer: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  render: function () {
    var {count, countdownStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer Page</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      </div>
    )
  }
});

module.exports = Timer;

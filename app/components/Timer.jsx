var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'Stopped'
    };
  },
  componentDidUpdate: function (oldProps, oldState) {
    if (this.state.timerStatus !== oldState.timerStatus) {
      switch (this.state.timerStatus) {
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
      timerStatus: newStatus
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
    var {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer Page</h1>
        <Clock totalSeconds={count}/>
        <Controls clockStatus={timerStatus} onStatusChange={this.handleStatusChange}/>;
      </div>
    )
  }
});

module.exports = Timer;

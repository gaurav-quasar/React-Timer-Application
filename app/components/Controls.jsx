var React = require('react');

var Controls = React.createClass({
  propTypes: {
    clockStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChanged: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  },
  // componentWillReceiveProps: function (newProps) {
  //   console.log("New Props Receive" + newProps.count);
  // },
  render: function () {
    var {clockStatus} = this.props;
    var renderStartStopButton = () => {
      if (clockStatus === 'Started') {
          return <button className="button secondary" onClick={this.onStatusChanged('Paused')}>Pause</button>;
      } else {
        return <button className="button primary" onClick={this.onStatusChanged('Started')}>Start</button>;
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChanged('Stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;

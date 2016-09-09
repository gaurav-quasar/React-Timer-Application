var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('Started');
    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('Started');
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });

  it('should stop timer on stopped status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('Started');
    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      timer.handleStatusChange('Stopped');
      expect(timer.state.timerStatus).toBe('Stopped');
      expect(timer.state.count).toBe(0);
      done();
    }, 2001);
  });

  it('should pause timer on paused status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('Started');
    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      timer.handleStatusChange('Paused');
      expect(timer.state.timerStatus).toBe('Paused');
      expect(timer.state.count).toBe(2);
      done();
    }, 2001);
  });
});

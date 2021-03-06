var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and Countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('Started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('should set state to stopped and Countdown to 0, once total countdown time elapsed', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(2);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('Stopped');
        done();
      }, 4000); //As total timeout for a test is 5000 ms.
    });

    it('should pause countdown when status is paused', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(20);
      countdown.handleStatusChange('Paused');

      setTimeout(() => {
        expect(countdown.state.countdownStatus).toBe('Paused');
        expect(countdown.state.count).toBe(20);
        done();
      }, 2000); //As total timeout for a test is 5000 ms.
    });

    it('should stop countdown when status is stopped', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(20);
      countdown.handleStatusChange('Stopped');

      expect(countdown.state.countdownStatus).toBe('Stopped');
      expect(countdown.state.count).toBe(0);
    });

  });
});

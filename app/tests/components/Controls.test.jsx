var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('should Exist', () => {
    expect(Controls).toExist();
  });

  describe('render Pause Button', () => {
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls clockStatus="Started"/>)
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);

    });
  });

  describe('render Start Button when status is Paused', () => {
    it('should render Start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls clockStatus="Paused"/>)
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Start)');

      expect($pauseButton.length).toBe(1);

    });
  });

  describe('render Start Button when status is Stopped', () => {
    it('should render Start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls clockStatus="Stopped"/>)
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Start)');

      expect($pauseButton.length).toBe(1);

    });
  });
});

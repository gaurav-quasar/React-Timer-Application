var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer Application</li>
            <li>
              <IndexLink to="/" activeClassName="active-link"> Timer </IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active-link"> Countdown </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created By:<a href="https://in.linkedin.com/in/gaurav-gupta-73556a95" target="_blank"> Gaurav </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;

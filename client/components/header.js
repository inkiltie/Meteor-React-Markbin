import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Accounts from './accounts';

class Header extends Component {
  onBinClick(event) {
    event.preventDefault();

    Meteor.call('bins.insert', (error, binId) => {
      this.props.history.push(`/bins/${binId}`);
    });
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Markbin</Link>
        </div>
        <div className="navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <Accounts />
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);

import React from 'react';
import Header from './Header'
import SideNav from './SideNav';

import TestRoutes from '../routes/ScannerRoutes';
import { Switch, Redirect, withRouter } from 'react-router';
import AuthorizedRoute from '@stockx/authorized-route';
import { getIsAuthorized } from '../ducks/auth/selectors';
import { connect } from 'react-redux';
import { getShowNav } from '../ducks/side_nav/selectors';
import classNames from 'classnames';

class App extends React.Component {
  render() {

    const { isAuthorized, showNav } = this.props;

    const sidebarOpen = classNames('sidebar', {
      'open': showNav,
    })

    return (
      <div className="game-container container">
          <div className="content">
          <Switch>
            <AuthorizedRoute path="/game" component={TestRoutes} isAuthorized={isAuthorized} />
            <Redirect to="/game" />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthorized: getIsAuthorized(state),
    showNav: getShowNav(state),
  };
};

export default withRouter(connect(mapStateToProps)(App));
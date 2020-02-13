import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from '../ducks/auth/actions';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { store } from '..';
import { getIsAuthorized } from '../ducks/auth/selectors';
import { getShowNav } from '../ducks/side_nav/selectors';
import { setShowNav } from '../ducks/side_nav/actions';
import classNames from 'classnames';

const Header = ({ isAuthorized, onLogout, showNav, setShowNav }) => {
    const onClickLogOut = event => {
        event.preventDefault();
        onLogout();
        store.dispatch(push('/'));
    };

    const onClickNavButton = (e) => {
        e.stopPropagation();
        setShowNav(!showNav);
    }

    const isActive = classNames('hamburger hamburger--emphatic', {
        'is-active': showNav,
    })

    return (
        <nav className="navbar navbar-light bg-white">
            <div className="toggler d-md-none">
                <button className={isActive} type="button" onClick={onClickNavButton}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <Link to="/" className="navbar-brand d-none d-md-block">
                <div className="d-flex align-items-center ml-4">
                    <img src="//internal-cdn.staging.stockx.io/1.0.2/img/logo-stock-x-black.svg" width="76" height="34" className="d-inline-block align-top" alt="" />
                    <div className="divider">&nbsp;</div>
                    <div>Catalog-Suite</div>
                </div>
            </Link>

            {
                isAuthorized &&
                <div className="mr-4 d-flex">
                    <div className="mr-2">Team Member</div>
                    <a className="pointer font-weight-bold" onClick={onClickLogOut}>Log Out</a>
                </div>
            }
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthorized: getIsAuthorized(state),
        showNav: getShowNav(state),
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onLogout: Auth.logout,
    setShowNav,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);

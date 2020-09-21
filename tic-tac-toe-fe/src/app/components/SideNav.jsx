import React from 'react';
import { Icon } from 'react-svg-icon-host';
// import { StockXIcons } from '@stockx/icons';
import { NavLink } from 'react-router-dom';
import { getShowNav } from '../ducks/side_nav/selectors';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';

const SideNav = ({ showNav }) => {

    const navClassName = classNames('navbar-dark sideNav bg-dark h-100 py-5', {
        'open': showNav,
    })


    return (
        <nav className={navClassName}>
            <div className="navbar-nav">
                <div>
                    <div className="nav-item">
                        <NavLink to="/scanner" className="nav-link d-flex align-items-center p-0">
                            <div className="position-relative d-flex align-items-center">
                                <div className="lg-icon bg-dark nav-link-icon"><Icon icon={StockXIcons.DiscountBubble} alt="discount" /></div>
                                <div className="text-size-lg nav-link-text pr-2">Test Link 1</div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        showNav: getShowNav(state),
    }
}

export default withRouter(connect(mapStateToProps)(SideNav));
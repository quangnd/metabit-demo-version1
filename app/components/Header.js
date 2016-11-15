import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../actions/auth';

class Header extends React.Component {
  handleLogout(event) {
    event.preventDefault();
    this.props.dispatch(logout());
  }

  render() {
    const active = { borderBottomColor: 'white' };
    const rightNav = this.props.token ? (
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" data-toggle="dropdown" className="navbar-avatar dropdown-toggle">
            <img src={this.props.user.picture || this.props.user.gravatar} />
            {' '}{this.props.user.name || this.props.user.email || this.props.user.id}{' '}
            <i className="caret"></i>
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/account">My Account</Link></li>
            <li className="divider"></li>
            <li><a href="#" onClick={this.handleLogout.bind(this)}>Logout</a></li>
          </ul>
        </li>
      </ul>
    ) : '' 
      //=====Disable Login features (quangnd)
      // (
      //   <ul className="nav navbar-nav navbar-right">
      //     <li>
      //         <Link to="/login" activeStyle={active}>
      //             <i className="fa fa-key" aria-hidden="true"></i> &nbsp; LOG IN
      //         </Link>
      //     </li>
      //   </ul>
      // );
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink to="/" className="navbar-brand">METABIT PROJECT</IndexLink>
          </div>
          <div id="navbar" className="navbar-collapse collapse navbar-right">
            <ul className="nav navbar-nav">
              <li>
                <IndexLink to="/" activeStyle={active}>
                  <i className="fa fa-home" aria-hidden="true"></i> &nbsp; HOME
                  </IndexLink>
              </li>
              <li>
                <Link to="/metabit-test" activeStyle={active}>
                  <i className="fa fa-flask" aria-hidden="true"></i>&nbsp; PERSONALITY TEST
                     </Link>
              </li>
              <li>
                <Link to="/contact" activeStyle={active}>
                    <i className="fa fa-users" aria-hidden="true"></i>&nbsp; ABOUT US
                </Link>   
              </li>
            </ul>
            {rightNav}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Header);

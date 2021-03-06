/* eslint-disable jsx-quotes */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = (user.id);

  const handleLogoutRequest = () => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    props.logoutRequest({});
    window.location.href = '/login';
  };

  const headerClass = classNames('header', { isLogin, isRegister });

  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="logo platzi video" />
      </Link>
      {hasUser && (
        <div className="header__menu">
          <div className="header__menu--profile">
            <img
              className="user__icon"
              src={hasUser ? gravatar(user.email) : userIcon}
              alt={hasUser ? user.email : 'userIcon'}
            />
            <p>{hasUser ? user.name : 'Perfil'}</p>

            <ul>
              {hasUser ? (
                <>
                  <li>
                    <Link to="a">Cuenta</Link>
                  </li>
                  <li>
                    <Link to="/login" onClick={handleLogoutRequest}>
                      Cerrar Sesión
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Iniciar Sesion</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

Header.protoTypes = {
  user: PropTypes.object.isRequired,
  logoutRequest: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  logoutRequest,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);


import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import oasisBackground from "../../assets/images/oasis-background.png";
import Login from "../common/auth/Login";
import Signup from "../common/auth/Signup";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLogin: true,
    }
  }

  setLogin = (setFlag) => {
    this.setState({ selectedLogin: setFlag });
  }

  render() {

    return (
      <div className="auth">
        <img width="100%" className="auth-background" src={oasisBackground} alt="OASIS FOUNTAIN" />
        <div className="auth-container">
          <Link to='/'><img className="oasis-logo" width="100%" src={logo} alt="OASIS FOUNTAIN" /></Link>
          <div className="auth-content">
            <div className="auth-tabs">
              <button className={`login ${this.state.selectedLogin === true ? "active" : ""}`} onClick={() => this.setLogin(true)}>Login</button>
              <button className={`signup ${this.state.selectedLogin === false ? "active" : ""}`} onClick={() => this.setLogin(false)}>Signup</button>
            </div>
            <div className="auth-content-body">
              {
                this.state.selectedLogin === true
                  ? <Login seletLogin={() => this.setLogin(false)} />
                  : <Signup seletLogin={() => this.setLogin(true)} />
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Auth;
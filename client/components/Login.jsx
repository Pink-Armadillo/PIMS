import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../assets/icon.png';

class Login extends React.Component {
  // check username and password with database
  render() {
    const { toggleLogin, loggedIn, update } = this.props;

    if (loggedIn) return <Redirect to="/" />;

    return (
      <div className="form-container" >
        <form className="login-form" id="login-form" onSubmit={toggleLogin} >
          <img className="icon" src={logo} />
          <br></br>
          <input className="form-input" id="input-username" name="username" type="text" placeholder="Username" onChange={update("username")} />
          <br></br>
          <input className="form-input" id="input-password" name="password" type="password" placeholder="Password" onChange={update("password")} />
          <br></br>
          {/* Takes in the inputs and sets state.logged in to true */}
          <button className="form-submit-button" >
            Login
          </button>

          <Link to="/signup">
            <button className="form-submit-button">
              Sign Up
            </button>
          </Link>

          <br></br>
          {/* Tried to use a functional get request to Github OAuth but realized we should've just used cookies
          <button onClick={ (e) => {e.preventDefault(); console.log('for github'); this.props.github()}}>
            <img
              id="github-logo"
              src="https://www.backblaze.com/blog/wp-content/uploads/2018/05/github-logo.png"
              style={{ width: '250px' }}
            />
          </button> */}
          <a href="https://github.com/login/oauth/authorize?client_id=fade47f049a7b9f4a3dc">
            <img className="github-button"
              id="github-logo"
              src="https://www.backblaze.com/blog/wp-content/uploads/2018/05/github-logo.png"
            />
          </a>
          {/* Didn't get to Google OAuth 
            <button>
            <img
              id="google-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/471px-Google_%22G%22_Logo.svg.png"
            />
          </button> */}
        </form>
      </div>
    );
  }
}

export default Login;

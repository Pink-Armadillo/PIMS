import React from 'react';
import { Redirect } from 'react-router-dom';
import logo from '../assets/icon.png';

// familiarize with how add card works without redirect to diff endpoint
// app, router, axios

class Signup extends React.Component {
  render() {
    const { registerUser, loggedIn, update } = this.props;

    if (loggedIn) return <Redirect to="/" />;

    return (
      <div className="form-container" >
        <form className="signup-form" id="signup-form" onSubmit={registerUser}>
          <img src={logo} alt="SCRUMadillo" className="icon" />
          <br></br>
          <input className="form-input" id="input-username" name="username" type="text" placeholder="Username" onChange={update('username')} />
          <br></br>
          <input className="form-input" id="input-password" name="password" type="password" placeholder="Password" onChange={update('password')} />
          <input className="form-input" id="input-confirm-password" name="confirm-password" type="password" placeholder="Confirm Password" onChange={update('confirm')} />
          <br></br>
          <button className="form-submit-button" 
          // onClick={(e) => {
          //     e.preventDefault();
          //     registerUser(
          //       document.getElementById('input-username').value,
          //       document.getElementById('input-password').value,
          //       document.getElementById('input-confirm-password').value
          //     );
          //   }}
          >
            Sign Up
          </button>
          <div>
            <a href="https://github.com/login/oauth/authorize?client_id=fade47f049a7b9f4a3dc">
              <img
                className="github-button"
                id="github-logo"
                src="https://www.backblaze.com/blog/wp-content/uploads/2018/05/github-logo.png"   
              />
            </a>
            {/* Didn't get to Google OAuth
            <button>
              <img
                id="google-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/471px-Google_%22G%22_Logo.svg.png"
                style={{ width: '250px' }}
              />
            </button> */}
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;

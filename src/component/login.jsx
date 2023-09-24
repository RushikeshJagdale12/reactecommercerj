import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log('Email:', email);
    console.log('Password:', password);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
      <h2 className="header">Login</h2>
      <form onSubmit={this.handleSubmit} className="form">
        <div className="input-container">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="input"
            required
          />
        </div>
        <div className="input-container">
          <label className="label">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <button type="submit" className="button">
            Login
          </button>
        </div>
      </form>
    </div>
    
    );
  }
}

export default Login;

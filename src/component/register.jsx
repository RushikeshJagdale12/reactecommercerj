import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = this.state;

    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);

    this.setState({ fullName: '', email: '', password: '', confirmPassword: '' });
  };

  render() {
    const { fullName, email, password, confirmPassword } = this.state;
    return (
      <div style={styles.container}>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={this.handleChange}
              required
              style={styles.input}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
              style={styles.input}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
              style={styles.input}
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              required
              style={styles.input}
            />
          </div>
          <div>
            <button type="submit" style={styles.button}>
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const styles = {
  container:{
    marginLeft:'30px',
    display: 'flex',
    flexDirection: 'column',
  
  },
  input: {
    padding: '8px',
    border: '2px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    width: '30%',
    marginBottom: '10px',
    display:'flex'
    

  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '10%',
  },
};

export default Register;

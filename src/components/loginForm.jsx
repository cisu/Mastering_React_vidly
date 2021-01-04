import React, {Component} from 'react';
import Input from './common/input';

class LoginForm extends Component {
  state = {
    account: {username: '', password: ''},
  };

  username = React.createRef();

  // componentDidMount() {
  //   this.username.current.focus();
  // }

  handleChange = ({currentTarget: input}) => {
    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({account});
  };

  handleSubmit = e => {
    e.preventDefault();

    // Call the server
    const username = this.username.current.value;
    console.log('Submitted');
  };

  render() {
    const {account} = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            autoFocus
            name='username'
            value={account.username}
            label='Username'
            onChange={this.handleChange}
            type='text'
          />

          <Input
            name='password'
            value={account.password}
            label='Password'
            onChange={this.handleChange}
            type='password'
          />

          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

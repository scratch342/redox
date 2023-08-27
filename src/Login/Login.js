import React, {Component} from 'react';
import './LoginRegister.css';

var btnStyle = {
    width: '100%',
    backgroundColor: '#d7a5e1',
    borderColor: '#ebb5f0',
    color: '#faf8fa'
};


class Login extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
			signinEmail: '',
			signinPassword: '',
		}
  }
  
  onSubmitSignInStudent = () => {
      console.log(this.state.signinEmail)
      console.log(this.state.signinPassword)
      
  		fetch('http://localhost:5500/signinStudent', {
  			method: 'post',
  			headers: {'Content-Type': 'application/json'},
  			body: JSON.stringify({
  				email: this.state.signinEmail,
  				password: this.state.signinPassword
  			})
  		}).then(response => {
        if (response.ok) return response.json()
          return response.json().then(json => Promise.reject(json))
      })
		.then(user => {
		    if(user){
          this.props.loadStudentUser(user)
				  this.props.onRouteChange('studentPortal');
		    }
		})
    .catch(e => {
      console.log(alert(e))
    })
    
  }  

  onSubmitSignInStaff = () => {
    this.props.onRouteChange('staffPortal');
  }
  
  onEmailChange = (event) => {
		this.setState({signinEmail: event.target.value});
	}
	onPasswordChange = (event) => {
		this.setState({signinPassword: event.target.value});
	}
  
    render() {
      return (
        <div className="Login">
            <div className="form1">
                <h1 className="title primary-size">Login</h1>
                <form>
                  <div className="form-group">
                    <input type="email" placeholder="Enter email" autoFocus onChange={this.onEmailChange} />
                  </div>
                  <div className="form-group" controlId="formGroupPassword">
                    <input type="password" placeholder="Enter password" onChange={this.onPasswordChange}/>
                  </div>
                  
                <button onClick={this.onSubmitSignInStudent}  style={btnStyle}>
                    LOGIN - STUDENT
                </button>
                <button onClick={this.onSubmitSignInStaff}  style={btnStyle}>
                    LOGIN - STAFF
                </button>
                </form>
            </div>
        </div>
      );
    }
}

export default Login;
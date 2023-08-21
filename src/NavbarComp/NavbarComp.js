import React, {Component} from 'react';
import './NavbarComp.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavbarComp extends Component {

  constructor(props){
    super(props);
  }
  
  onSubmitSignInOne = () => {
    this.props.onRouteChange('home');
  }  
  
  onSubmitSignInTwo = () => {
    this.props.onRouteChange('tutors');
  }  
  onSubmitSignInThree = () => {
    this.props.onRouteChange('services');
  }  

  onRegisterInterest = () => {
  	window.open("https://forms.gle/SDwrfyzdXWVyr76W6", "_blank");
  }

	render(){
		return (
			<div className="NavbarComp">
				<nav className="navbar navbar-expand-lg navbar-custom fixed-top">
				  <span className="navbar-brand" onClick={this.onSubmitSignInOne} >
				    <img src="logo.png" className="nav-logo" />
				  </span>
				  <button
				    className="navbar-toggler"
				    type="button"
				    data-toggle="collapse"
				    data-target="#navbarToggler"
				    aria-controls="navbarToggler"
				    aria-expanded="false"
				    aria-label="Toggle navigation"
				  >
				    <span className="navbar-toggler-icon" />
				  </button>
				  <div
				    className="navbar-collapse collapse w-100 order-3 dual-collapse2"
				    id="navbarToggler"
				  >
				    <ul className="navbar-nav ml-auto">
				      <li className="nav-item nav-text">
				        <a className="nav-link" href="#" onClick={this.onSubmitSignInTwo}>
				          Tutors
				        </a>
				      </li>
				      <li className="nav-item nav-text">
				        <a className="nav-link" href="#" onClick={this.onSubmitSignInThree}>
				          Services
				        </a>
				      </li>
				      <li className="nav-item">
				        <button onClick={this.onRegisterInterest} className="btn btn-primary sign-up">
				          Click here to sign-up
				        </button>
				      </li>
				      <li className="nav-item">
				        <button className="btn btn-secondary">Student Portal</button>
				      </li>
				      <li className="nav-item">
				        <button className="btn btn-secondary">Staff Portal</button>
				      </li>
				    </ul>
				  </div>
				</nav>

			</div>
		)
	}
}

export default NavbarComp;
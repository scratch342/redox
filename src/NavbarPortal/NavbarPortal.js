import React, {Component} from 'react';
import '.././NavbarComp/NavbarComp.css';


class NavbarPortal extends Component {

  constructor(props){
    super(props);
  }
  


	render(){
		return (
			<div className="NavbarPortal">
				<nav className="navbar navbar-expand-lg navbar-custom fixed-top">

				  <span className="navbar-brand" >
				    <img src="logo.png" className="nav-logo" />
				  </span>

				  <div
				    className="navbar w-100 order-3 "
				  >
				    <ul className="navbar-nav ml-auto">
				      <li className="nav-item">
				        <button className="btn btn-secondary" onClick={this.props.onLogOut}>Logout Portal</button>
				      </li>
				    </ul>
				  </div>
				</nav>

			</div>
		)
	}
}

export default NavbarPortal;
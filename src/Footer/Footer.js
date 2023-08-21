import React, {Component} from 'react';

class Footer extends Component {

  render(){
    return(
        <div className="Footer">
	      <div className="footer">
	        <div className="container">
	          <span>
	            <a href="https://www.facebook.com/redoxtutoring" target="_blank">
	              <i className="fa-brands fa-square-facebook fa-2xl" /> Follow us on Facebook </a>
	          </span>
	          <span>
	            <i className="fa-solid fa-envelope fa-2xl" /> support@redoxtutoring.com.au </span>
	        </div>
	      </div>
        </div>
      )
  }
}

export default Footer;

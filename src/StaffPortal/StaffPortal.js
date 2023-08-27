import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './StaffPortal.css';

class StaffPortal extends Component {

	constructor() {
		super();

		this.state = {
			route: 'one-on-one-pay'
		}
	}

	onChangeOneOnOnePay = (e) => {

		//Set other items to not be active
		e.target.parentNode.parentNode.childNodes[1].childNodes[0].className = "nav-link nav-link-portal";
		e.target.parentNode.parentNode.childNodes[2].childNodes[0].className = "nav-link nav-link-portal";
		e.target.parentNode.parentNode.childNodes[3].childNodes[0].className = "nav-link nav-link-portal";

		e.target.className = "nav-link nav-link-portal active";
		this.setState({route: 'one-on-one-pay'});
	}

	onChangeExamPay = (e) => {
		//Set other items to not be active
		e.target.parentNode.parentNode.childNodes[0].childNodes[0].className = "nav-link nav-link-portal";
		e.target.parentNode.parentNode.childNodes[2].childNodes[0].className = "nav-link nav-link-portal";
		e.target.parentNode.parentNode.childNodes[3].childNodes[0].className = "nav-link nav-link-portal";

		e.target.className = "nav-link nav-link-portal active";
		this.setState({route: 'exam-pay'});
	}

	onChangeStudents = (e) => {

		//Set other items to not be active
		e.target.parentNode.parentNode.childNodes[0].childNodes[0].className = "nav-link nav-link-portal";
		e.target.parentNode.parentNode.childNodes[1].childNodes[0].className = "nav-link nav-link-portal";
		e.target.parentNode.parentNode.childNodes[3].childNodes[0].className = "nav-link nav-link-portal";

		e.target.className = "nav-link nav-link-portal active";
		this.setState({route: 'students'});
	}

	onChangeBillings = (e) => {

		//Set other items to not be active
		e.target.parentNode.parentNode.childNodes[0].childNodes[0].className = "nav-link nav-link-portal";
		e.target.parentNode.parentNode.childNodes[1].childNodes[0].className = "nav-link nav-link-portal";
		e.target.parentNode.parentNode.childNodes[2].childNodes[0].className = "nav-link nav-link-portal";

		e.target.className = "nav-link nav-link-portal active";
		this.setState({route: 'billings'});
	}

  render(){

  	const { route } = this.state;

    return(

        <div className="StaffPortal container">
					<div className="card portal">
					  <div className="card-header card-header-portal">
					    <ul className="nav nav-tabs card-header-tabs">
					      <li className="nav-item"  >
					        <a className="nav-link nav-link-portal active" href="#" onClick={e => this.onChangeOneOnOnePay(e)}>One-on-one Payments</a>
					      </li>
					      <li className="nav-item"  >
					        <a className="nav-link nav-link-portal" href="#" onClick={e => this.onChangeExamPay(e)}>Exam Payments</a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link nav-link-portal" href="#" onClick={e => this.onChangeStudents(e)}>Students</a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link nav-link-portal" href="#" onClick={e => this.onChangeBillings(e)}>Billings</a>
					      </li>
					    </ul>
					  </div>

					  {(
					  //Add Payment Component
    				route === "one-on-one-pay" ?
					  <div className="card-body">
					    <h1 className="card-title card-title-portal text-center">Add Payment for One-on-one Service</h1>
							<form>

							  <div className="form-group">
							    <label htmlFor="studentSelect">Student Name</label>
							    <select className="form-control" id="studentSelect">
							      <option>1</option>
							      <option>2</option>
							      <option>3</option>
							      <option>4</option>
							      <option>5</option>
							    </select>
							  </div>

							  <div className="form-group">
							    <label htmlFor="serviceInput">Service Description</label>
							    <input type="text" className="form-control" id="serviceInput" />
							  </div>

							  <div className="form-group">
							    <label htmlFor="priceInput">Price (AUD)</label>
							    <input type="number" className="form-control" id="priceInput" />
							  </div>

							  <div className="form-group">
							    <label htmlFor="dateInput">Date of Service</label>
							    <input type="date" className="form-control" id="dateInput" />
							  </div>

							  <div className="form-group">
							    <label htmlFor="notes">Notes</label>
							    <textarea type="text" className="form-control" id="notes" />
							  </div>



							  <button className="btn btn-portal" type="submit">Submit</button>
							</form>
					  </div>

					  :
					  //Exam payment component
					  route === "exam-pay" ?
					  <div className="container">
					  	<h1 className="text-center">Exam payments</h1>
					  	<hr />
					  	<div className="row">
					  		<div className="col">
					  			<h2 className="text-center">Session-by-session payees</h2>
					  			<ul className="list-group">
					  				<li className="list-group-item">Payee 1 <button className="btn btn-primary">Add payment for week</button></li>
					  			</ul>
					  		</div>

					  		<div className="col">
					  			<h2 className="text-center">Bulk payees</h2>
					  			<ul className="list-group">
					  				<li className="list-group-item">Payee 1</li>
					  			</ul>
					  		</div>
					  	</div>
					  </div>

					  : 
					  //Students component
					  //The idea here is that the students will sign up using their own name, email and school
					  //After they sign up, you can then select them from the dropdown and create a profile for them in your own portal
					  route === "students" ?
					  <div className="container">
						  <h1 className="text-center">Students</h1>
						  <hr />
						  <h2 className="text-center">Add Student Profile</h2>


						  <form>
							  <div className="form-group">
							    <label htmlFor="studentSelectProfile">Student Name</label>
							    <select className="form-control" id="studentSelectProfile">
							      <option>Johnny Smith - Adelaide School</option>
							    </select>
							  </div>

							  <div className="row">
							  	<div className="col">
									  One-on-one Subject(s)
							      <div className="form-check">
							        <input className="form-check-input" type="checkbox" id="Biology" />
							        <label className="form-check-label" htmlFor="Biology">
							          Biology
							        </label>
							      </div>
							      <div className="form-check">
							        <input className="form-check-input" type="checkbox" id="Chemistry" />
							        <label className="form-check-label" htmlFor="Chemistry">
							          Chemistry
							        </label>
							      </div>
							      <div className="form-check">
							        <input className="form-check-input" type="checkbox" id="Physics" />
							        <label className="form-check-label" htmlFor="Physics">
							          Physics
							        </label>
							      </div>
							      <div className="form-check">
							        <input className="form-check-input" type="checkbox" id="Methods" />
							        <label className="form-check-label" htmlFor="Methods">
							          Methods
							        </label>
							      </div>	
							    </div>
							    <div className="col">
									  Exam Subject(s)
							      <div className="form-check">
							        <input className="form-check-input" type="checkbox" id="Biology" />
							        <label className="form-check-label" htmlFor="Biology">
							          Biology
							        </label>
							      </div>
							      <div className="form-check">
							        <input className="form-check-input" type="checkbox" id="Chemistry" />
							        <label className="form-check-label" htmlFor="Chemistry">
							          Chemistry
							        </label>
							      </div>
							      <div className="form-check">
							        <input className="form-check-input" type="checkbox" id="Physics" />
							        <label className="form-check-label" htmlFor="Physics">
							          Physics
							        </label>
							      </div>
							      <div className="form-check">
							        <input className="form-check-input" type="checkbox" id="Methods" />
							        <label className="form-check-label" htmlFor="Methods">
							          Methods
							        </label>
							      </div>	
							    </div>
							  </div>			      

					      <button className="btn btn-portal" type="submit">Submit</button>
						  </form>

						  <hr />

						  <h2 className="text-center">Student List </h2>
							<table className="table">
							  <thead className="thead-dark">
							    <tr>
							      <th scope="col">Student Name</th>
							      <th scope="col">School</th>
							      <th scope="col">Email</th>
							      <th scope="col">One-on-One Subject(s)</th>
							      <th scope="col">Exam Subject(s)</th>
							      <th scope="col">Delete?</th>
							      
							      
							    </tr>
							  </thead>
							  <tbody>
							    <tr>
							      <td>Tom</td>
							      <td>SA School</td>
							      <td>tom@email.com</td>
							      <td>Biology, Chemistry</td>
							      <td>N/A</td>
							      <td><button className="btn btn-danger">Delete</button></td>
							    </tr>

							  </tbody>
							</table>
					  </div>
					  :

					  //Billings component
					  <div className="container">
					  <h1 className="text-center">Billings</h1>
					  <hr />
					  <h2 className="text-center">Pending</h2>
						<table className="table">
						  <thead className="thead-dark">
						    <tr>
						      <th scope="col">Student Name</th>
						      <th scope="col">Service Description</th>
						      <th scope="col">Price</th>
						      <th scope="col">Notes</th>
						      <th scope="col">Date of Service</th>
						      <th scope="col">Delete?</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td>Ruby</td>
						      <td>One-on-one tutoring and drafting and some group sessions etc etc etc</td>
						      <td>100</td>
						      <td>It was a great session, I did come kinda late tho, maybe next time i'll try harder</td>
						      <td>05/05/2023</td>
						      <td><button className="btn btn-danger">Delete</button></td>
						    </tr>

						  </tbody>
						</table>

						<hr />

						<h2 className="text-center">Paid</h2>
						<table className="table">
						  <thead className="thead-dark">
						    <tr>
						      <th scope="col">Student Name</th>
						      <th scope="col">Service Description</th>
						      <th scope="col">Price</th>
						      <th scope="col">Notes</th>
						      <th scope="col">Date of Service</th>
						      <th scope="col">Date Paid</th>
						      <th scope="col">Payment Week</th>
						      
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td>Ruby</td>
						      <td>One-on-one tutoring and drafting and some group sessions etc etc etc</td>
						      <td>100</td>
						      <td>It was a great session, I did come kinda late tho, maybe next time i'll try harder</td>
						      <td>05/05/2023</td>
						      <td>06/05/2023</td>
						      <td>23</td>
						    </tr>

						  </tbody>
						</table>

						</div>
					  )}
					</div>
        </div>
      )
  }
}

export default StaffPortal;

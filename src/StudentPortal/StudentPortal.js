import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '.././StaffPortal/StaffPortal.css';

class StudentPortal extends Component {

	constructor(props) {
		super(props);

		this.state = {
			route: 'payments'
		}
	}

	onChangePayments = (e) => {

		//Set other items to not be active
		e.target.parentNode.parentNode.childNodes[1].childNodes[0].className = "nav-link nav-link-portal";
		e.target.parentNode.parentNode.childNodes[2].childNodes[0].className = "nav-link nav-link-portal";

		e.target.className = "nav-link nav-link-portal active";
		this.setState({route: 'payments'});
	}

	onChangeBulkExamPayments = (e) => {

		//Set other items to not be active
		e.target.parentNode.parentNode.childNodes[0].childNodes[0].className = "nav-link nav-link-portal";
		e.target.parentNode.parentNode.childNodes[2].childNodes[0].className = "nav-link nav-link-portal";

		e.target.className = "nav-link nav-link-portal active";
		this.setState({route: 'bulk-exam-payments'});
	}

	onChangeBillings = (e) => {
		//Set other items to not be active
		e.target.parentNode.parentNode.childNodes[0].childNodes[0].className = "nav-link nav-link-portal";
		e.target.parentNode.parentNode.childNodes[1].childNodes[0].className = "nav-link nav-link-portal";

		e.target.className = "nav-link nav-link-portal active";
		this.setState({route: 'billings'});
	}





  render(){

  	const { route } = this.state;
  	console.log(this.props.studentUser)

    return(

        <div className="StaffPortal container">
					<div className="card portal">
					  <div className="card-header card-header-portal">
					    <ul className="nav nav-tabs card-header-tabs">
					      <li className="nav-item"  >
					        <a className="nav-link nav-link-portal active" href="#" onClick={e => this.onChangePayments(e)}>Payments</a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link nav-link-portal" href="#" onClick={e => this.onChangeBulkExamPayments(e)}>Bulk Exam Payments</a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link nav-link-portal" href="#" onClick={e => this.onChangeBillings(e)}>Billings</a>
					      </li>
					    </ul>
					  </div>

					  {(
					  //Add Payment Component
    				route === "payments" ?
					  <div className="card-body">
					    <h1 className="card-title card-title-portal text-center">Outstanding Payments</h1>
							<table className="table">
							  <thead className="thead-dark">
							    <tr>
							      <th scope="col">Tutor Name</th>
							      <th scope="col">Service Description</th>
							      <th scope="col">Price</th>
							      <th scope="col">Date of Service</th>
							      <th scope="col">Pay</th>
							    </tr>
							  </thead>
							  <tbody>
							  {
							  	this.props.studentUser.outstandingPaymentsInfo.map((outstandingPayment) => (
								    <tr key={outstandingPayment.id}>
								      <td>{outstandingPayment.tutorFirstName} {outstandingPayment.tutorLastName}</td>
								      <td>{outstandingPayment.service}</td>
								      <td>{outstandingPayment.price}</td>
								      <td>{outstandingPayment.serviceDate}</td>
								      <td><button className="btn btn-primary">Pay</button></td>
								    </tr>
							  		))

							  }
							  </tbody>
							</table>
							<button className="btn btn-primary btn-pay-all"><b>Pay all</b></button>
					  </div>

					  :
					  //Exam payment component
					  route === "bulk-exam-payments" ?
					  <div className="card-body">
					  	<h1 className="text-center">Bulk Exam Payments</h1>
					  	<hr />
							<table className="table">
							  <thead className="thead-dark">
							    <tr>
							      <th scope="col">Subject</th>
							      <th scope="col">Price</th>
							      <th scope="col">Pay</th>
							    </tr>
							  </thead>
							  <tbody className="bulk-tbody">
							    <tr>
							      <td>Biology</td>
							      <td>200</td>
							      <td><button className="btn btn-primary">Pay</button></td>
							    </tr>

							  </tbody>
							</table>
					  </div>

					  :

					  //Billings component
					  <div className="card-body">
					  <h1 className="text-center">Billings</h1>
					  <hr />

						<table className="table">
						  <thead className="thead-dark">
						    <tr>
						      <th scope="col">Tutor Name</th>
						      <th scope="col">Service Description</th>
						      <th scope="col">Price</th>
						      <th scope="col">Date of Service</th>
						      <th scope="col">Date Paid</th>
						      <th scope="col">Payment Week</th>
						      
						    </tr>
						  </thead>
						  <tbody>

						  	{
						  		this.props.studentUser.completedPaymentsInfo.map((completedPayment) => (
								    <tr key={completedPayment.id}>
								      <td>{completedPayment.tutorFirstName} {completedPayment.tutorLastName}</td>
								      <td>{completedPayment.service}</td>
								      <td>{completedPayment.price}</td>
								      <td>{completedPayment.serviceDate}</td>
								      <td>{completedPayment.paymentDate}</td>
								      <td>{completedPayment.paymentWeek}</td>
								    </tr>						  			
						  		))

						  	}
						  </tbody>
						</table>

						</div>
					  )}
					</div>
        </div>
      )
  }
}

export default StudentPortal;

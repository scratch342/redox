import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './StaffPortal.css';

class StaffPortal extends Component {

	constructor(props) {
		super(props);

		this.state = {
			route: 'one-on-one-pay',
			studentID: '',
			service: '',
			price: '',
			serviceDate: '',
			notes: '',
			studentIdExam: '',
			sessionNumber: '',
			serviceDateExam: ''
		}
	}

	onChangeStudentID = (e) => {
		this.setState({studentID: e.target.childNodes[e.target.selectedIndex].id})
	}

	onChangeService = (e) => {
		this.setState({service: e.target.value});
	}

	onChangePrice = (e) => {
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
		this.setState({price: e.target.value});
	}

	onChangeServiceDate = (e) => {
		this.setState({serviceDate: e.target.value});
		console.log(this.state.serviceDates)
	}

	onChangeNotes = (e) => {
		this.setState({notes: e.target.value});
	}

	onAddPayment = (event) => {
			event.preventDefault();
  		fetch('http://localhost:5500/addPayment', {
  			method: 'post',
  			headers: {'Content-Type': 'application/json'},
  			body: JSON.stringify({
  				staffID: this.props.staffUser.staffInfo.id,
  				staffEmail: this.props.staffUser.staffInfo.email,
  				staffFirstName: this.props.staffUser.staffInfo.firstName,
  				staffLastName: this.props.staffUser.staffInfo.lastName,
  				studentID: this.state.studentID,
  				service: this.state.service,
  				price: this.state.price,
  				serviceDate: this.state.serviceDate,
  				notes: this.state.notes
  			})
  		}).then(response => {
        if (response.ok) return response.json()
          return response.json().then(json => Promise.reject(json))
      })
		.then(outstandingPayments => {
		    if(outstandingPayments){
          this.props.loadOutstandingPayments(outstandingPayments)
          alert("worked");
		    }
		})
    .catch(e => {
      console.log(alert(e))
    })
	}


	onChangeStudentIDExam = (e) => {
		this.setState({studentIDExam: e.target.childNodes[e.target.selectedIndex].id})
	}

	//With stuff like this, see if there's a way to ensure the value is '' by default always
	onChangeSessionNumber = (e) => {
		this.setState({sessionNumber: e.target.value})
	}

	onChangeServiceDateExam = (e) => {
		this.setState({serviceDateExam: e.target.value})
	}

	onAddPaymentExam = (event) => {
				event.preventDefault();
	  		fetch('http://localhost:5500/addPaymentExam', {
  			method: 'post',
  			headers: {'Content-Type': 'application/json'},
  			body: JSON.stringify({
  				staffID: this.props.staffUser.staffInfo.id,
  				staffEmail: this.props.staffUser.staffInfo.email,
  				staffFirstName: this.props.staffUser.staffInfo.firstName,
  				staffLastName: this.props.staffUser.staffInfo.lastName,
  				studentID: this.state.studentIDExam,
  				sessionNumber: this.state.sessionNumber,
  				serviceDate: this.state.serviceDateExam
  			})
  		}).then(response => {
        if (response.ok) return response.json()
          return response.json().then(json => Promise.reject(json))
      })
		.then(outstandingPayments => {
		    if(outstandingPayments){
          this.props.loadOutstandingPayments(outstandingPayments)
          alert("worked");
		    }
		})
    .catch(e => {
      console.log(alert(e))
    })
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
  	console.log(this.props.staffUser.students)

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
								    <select className="form-control" id="studentSelect" onChange={this.onChangeStudentID}>		
								    	<option>Select name</option>
								    {
								    	this.props.staffUser.students.map((student) => (
								    		<option key={student.id} id={student.id}>{student.firstName} {student.lastName} - {student.school}</option>
								    	))
								    }					    
								    </select>							  
							  </div>

							  <div className="form-group">
							    <label htmlFor="serviceInput">Service Description</label>
							    <input type="text" className="form-control" id="serviceInput" onChange={this.onChangeService} />
							  </div>

							  <div className="form-group">
							    <label htmlFor="priceInput">Price (AUD)</label>
							    <input type="number" className="form-control" id="priceInput" min="0.1" max="300" onChange={this.onChangePrice} />
							  </div>

							  <div className="form-group">
							    <label htmlFor="dateInput">Date of Service</label>
							    <input type="date" className="form-control" id="dateInput" onChange={this.onChangeServiceDate} />
							  </div>

							  <div className="form-group">
							    <label htmlFor="notes">Notes</label>
							    <textarea type="text" className="form-control" id="notes" onChange={this.onChangeNotes} />
							  </div>



							  <button className="btn btn-portal" type="submit" onClick={this.onAddPayment}>Submit</button>
							</form>
					  </div>

					  :
					  //Exam payment component
					  route === "exam-pay" ?
					  <div className="container">
					  	<h1 className="text-center">Exam payments</h1>
					  	
					  	<div class="row">
					  		<div class="col">
							  	<h2 className="text-center">Bulk payees</h2>
							  	
							  	{
							  		this.props.staffUser.bulkPayees.map((bulkPayee) => (
									 		<ul className="list-group" key={bulkPayee.id}>
									 			<li className="list-group-item">{bulkPayee.firstName} {bulkPayee.lastName}</li>
								 			</ul>
							  			))

						 			}	
						 		</div>
					 		
					 			<div class="col">
					  			<h2 className="text-center">Session-by-session payees</h2>
					  			
									<form>

									  <div className="form-group">
									    <label htmlFor="studentSelectExam">Student Name</label>
										    <select className="form-control" id="studentSelectExam" onChange={this.onChangeStudentIDExam}>		
										    	<option>Select name</option>
										    {
										    	this.props.staffUser.sessionPayees.map((sessionPayee) => (
										    		<option key={sessionPayee.id} id={sessionPayee.id}>{sessionPayee.firstName} {sessionPayee.lastName} - {sessionPayee.school}</option>
										    	))
										    }					    
										    </select>							  
									  </div>

									  <div className="form-group">
									    <label htmlFor="sessionNumberExam">Session Number</label>
									    <select className="form-control" id="sessionNumberExam" onChange={this.onChangeSessionNumber}>
									    	<option></option>
									      <option>1</option>
									      <option>2</option>
									      <option>3</option>
									      <option>4</option>
									      <option>5</option>
									      <option>6</option>
									      <option>7</option>
									      <option>8</option>
									    </select>
									  </div>

									  <div className="form-group">
									    <label htmlFor="dateInput">Date of Service</label>
									    <input type="date" className="form-control" id="dateInput" onChange={this.onChangeServiceDateExam} />
									  </div>



									  <button className="btn btn-portal" type="submit" onClick={this.onAddPaymentExam}>Submit</button>
									</form>
								</div>
							</div>


					  </div>

					  : 
					  //Students component
					  //The idea here is that the students will sign up by themselves
					  //After they sign up, you do any contact necessary, then add them to the directory
					  route === "students" ?
					  <div className="container">
						  <h1 className="text-center">Students</h1>

						  {/*
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
						  */}	

						  <hr />

							<table className="table">
							  <thead className="thead-dark">
							    <tr>
							      <th scope="col">Student Name</th>
							      <th scope="col">School</th>
							      <th scope="col">Email</th>
							      <th scope="col">One-on-One Subject(s)</th>
							      <th scope="col">Exam Subject(s)</th>
							      
							      
							    </tr>
							  </thead>
							  <tbody>
							  	{
							  		this.props.staffUser.students.map((student) => (
									    <tr key={student.id}>
									      <td>{student.firstName} {student.lastName}</td>
									      <td>{student.school}</td>
									      <td>{student.email}</td>
									      {
									      	student.oneOnOneSubjects.map((oneOnOneSubject) => (
									      			<td>{oneOnOneSubject}</td>
									      		))
									    	}
									      {
									      	student.examSubjects.map((examSubject) => (
									      			<td>{examSubject}</td>
									      		))
									    	}
									    </tr>
							  			))

							  	}
							  </tbody>
							</table>
					  </div>
					  :

					  //Billings component
					  <div className="container">
					  <h1 className="text-center">Billings</h1>
					  <hr />
					  <h2 className="text-center">Outstanding</h2>
						<table className="table">
						  <thead className="thead-dark">
						    <tr>
						      <th scope="col">Student Name</th>
						      <th scope="col">Service Description</th>
						      <th scope="col">Price</th>
						      <th scope="col">Notes</th>
						      <th scope="col">Date of Service</th>
						    </tr>
						  </thead>
						  <tbody>
						  {
						  	this.props.staffUser.outstandingPaymentsInfo.map(outstandingPayment => (
							    <tr key={outstandingPayment.id}>
							      <td>{outstandingPayment.studentFirstName} {outstandingPayment.studentLastName}</td>
							      <td>{outstandingPayment.service}</td>
							      <td>{outstandingPayment.price}</td>
							      <td>{outstandingPayment.notes}</td>
							      <td>{outstandingPayment.serviceDate}</td>
							    </tr>
						  		))

						  }
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
						  {
						  	this.props.staffUser.completedPaymentsInfo.map(completedPayment => (
							    <tr key={completedPayment.id}>
							      <td>{completedPayment.studentFirstName} {completedPayment.studentLastName}</td>
							      <td>{completedPayment.service}</td>
							      <td>{completedPayment.price}</td>
							      <td>{completedPayment.notes}</td>
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

export default StaffPortal;

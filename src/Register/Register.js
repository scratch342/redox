//Register page needs to ensure that once the student has registered and everything is successfully posted to database
//an email should be sent to relevant tutor(s) (and always me) to organise contact and/or consultation session
//It will work exactly the same as the Google Form - any subjects that aren't currently available will be removed as options
//If somehow I forget to remove unavailable subjects, I can just manually delete the student from the database after informing them


import React, {Component} from 'react';
import '../Login/LoginRegister.css';

var btnStyle = {
    width: '100%',
    backgroundColor: '#d7a5e1',
    borderColor: '#ebb5f0',
    color: '#faf8fa'
};


class Register extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
			registerEmail: '',
			registerPassword: '',
			registerConfirmPassword: '',
			registerSchool: '',
			registerFirstName: '',
			registerLastName: '',
			registerOneOnOne: [],
			registerExam: []
		}
  }
  
  
	onEmailChange = (event) => {
		this.setState({registerEmail: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({registerPassword: event.target.value});
	}

	onConfirmPassword = (event) => {
		this.setState({registerConfirmPassword: event.target.value});
	}

	onSchoolChange = (event) => {
		this.setState({registerSchool: event.target.value});
	}

	onFirstNameChange = (event) => {
		this.setState({registerFirstName: event.target.value});
	}

	onLastNameChange = (event) => {
		this.setState({registerLastName: event.target.value});
	}

	handleOneOnOne = (event) => {
	    let newArray = [...this.state.registerOneOnOne, event.target.id];
	    if (this.state.registerOneOnOne.includes(event.target.id)) {
	      newArray = newArray.filter(day => day !== event.target.id);
	    } 
	    this.setState({
	      registerOneOnOne: newArray
	    });

	    console.log(this.state.registerOneOnOne);
	}

	handleExam = (event) => {
	    let newArray = [...this.state.registerExam, event.target.id];
	    if (this.state.registerExam.includes(event.target.id)) {
	      newArray = newArray.filter(day => day !== event.target.id);
	    } 
	    this.setState({
	      registerExam: newArray
	    });

	    console.log(this.state.registerExam);
	}

	onSubmitRegister = (event) => {
			event.preventDefault();
			console.log(this.state.registerOneOnOne, this.state.registerExam)
			if(this.state.registerPassword !== this.state.registerConfirmPassword){
				alert("Passwords do not match")
			}else if(this.state.registerEmail == '' || this.state.registerPassword == '' || this.state.registerSchool == '' || this.state.registerFirstName == '' || this.state.registerLastName == ''){
				alert("A field is empty")
			}else if(this.state.registerOneOnOne.length == 0 && this.state.registerExam.length == 0){
				alert("Choose at least one subject")
			}else{

	  		fetch('http://localhost:5500/register', {
	  			method: 'post',
	  			headers: {'Content-Type': 'application/json'},
	  			body: JSON.stringify({
	  				email: this.state.registerEmail,
	  				password: this.state.registerPassword,
	  				school: this.state.registerSchool,
	  				firstName: this.state.registerFirstName,
	  				lastName: this.state.registerLastName,
	  				oneOnOne: this.state.registerOneOnOne,
	  				exam: this.state.registerExam
	  			})
	  		}).then(response => {
	        if (response.ok) return response.json()
	          return response.json().then(json => Promise.reject(json))
	      })
			.then(user => {
			    if(user){
			    	console.log(user);
	          this.props.loadRegister(user)
			this.props.onRouteChange('studentPortal');
	          this.props.onLogIn()
			    }
			})
	    .catch(e => {
	      console.log(alert(e))
	    })
		}
	}
  
    render() {
      return (
        <div className="Register ">
        	<div className="form1">
        		<h1 className="title primary-size">Register</h1>
				<form>
				  <div className="form-row">
				    <div className="form-group col-md-6">
				      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={this.onEmailChange} />
				    </div>
				    <div className="form-group col-md-6">
				      <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={this.onPasswordChange} />
				    </div>
				  </div>
				  <div className="form-row">
				    <div className="form-group col-md-6">
				      <input type="password" className="form-control" id="inputPassword5" placeholder="Re-enter Password" onChange={this.onConfirmPassword} />
				    </div>
				    <div className="form-group col-md-6">
				      <input type="text" className="form-control" id="inputSchool" placeholder="School" onChange={this.onSchoolChange} />
				    </div>
				  </div>
				  <div className="form-row">
				    <div className="form-group col-md-6">
				      <input type="text" className="form-control" id="inputFirstName" placeholder="First Name" onChange={this.onFirstNameChange} />
				    </div>
				    <div className="form-group col-md-6">
				      <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" onChange={this.onLastNameChange} />
				    </div>
				  </div>	
				<div className="form-group">
					<label htmlFor="selectOneOnOne">One-on-one/drafting subjects: &nbsp; </label>
			        <div className="form-check form-check-inline">
			          <input className="form-check-input" type="checkbox" id="Biology" defaultValue="biology" onChange={this.handleOneOnOne} />
			          <label className="form-check-label" >Biology &nbsp;</label>
			          <input className="form-check-input" type="checkbox" id="Chemistry" defaultValue="chemistry" onChange={this.handleOneOnOne} />
			          <label className="form-check-label" >Chemistry &nbsp;</label>
			          <input className="form-check-input" type="checkbox" id="Physics" defaultValue="physics" onChange={this.handleOneOnOne} />
			          <label className="form-check-label" >Physics &nbsp;</label>
			          <input className="form-check-input" type="checkbox" id="Methods" defaultValue="methods" onChange={this.handleOneOnOne} />
			          <label className="form-check-label" >Methods</label>			          			          
			    	</div>

				</div>	
				<div className="form-group">
					<label htmlFor="selectExam">Group exam preparation subjects: &nbsp; </label>
			        <div className="form-check form-check-inline">
			          <input className="form-check-input" type="checkbox" id="Biology" defaultValue="biologyExam" onChange={this.handleExam}/>
			          <label className="form-check-label" >Biology &nbsp;</label>
			          <input className="form-check-input" type="checkbox" id="Chemistry" defaultValue="chemistryExam" onChange={this.handleExam}/>
			          <label className="form-check-label" >Chemistry &nbsp;</label>
			          <input className="form-check-input" type="checkbox" id="Physics" defaultValue="physicsExam" onChange={this.handleExam}/>
			          <label className="form-check-label" >Physics &nbsp;</label>
			          <input className="form-check-input" type="checkbox" id="Methods" defaultValue="methodsExam" onChange={this.handleExam}/>
			          <label className="form-check-label" >Methods</label>			          			          
			    	</div>

				</div>									  
				  
				  <button type="submit" className="btn btn-primary" onClick={this.onSubmitRegister}>Register</button>
				</form>
			</div>
        </div>
      );
    }
}

export default Register;
import React, {Component} from 'react';
import NavbarComp from './NavbarComp/NavbarComp';
import NavbarPortal from './NavbarPortal/NavbarPortal';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Tutors from './Tutors/Tutors';
import Services from './Services/Services';
import StaffPortal from './StaffPortal/StaffPortal';
import StudentPortal from './StudentPortal/StudentPortal';
import Login from './Login/Login';
import Register from './Register/Register';

import './App.css';

import "bootstrap-4-react/dist/bootstrap-4-react";

class App extends Component {

  constructor(){
    super();

    this.state = {
      route: 'home',
      loggedIn: false,
      studentUser: {
        outstandingPaymentsInfo: [],
        completedPaymentsInfo: [],
        studentInfo: {}
      },

      staffUser: {
        students: [],
        bulkPayees: [],
        sessionPayees: [],
        outstandingPaymentsInfo: [],
        completedPaymentsInfo: [],
        staffInfo: {}
      }

    }
  }

  loadStudentUser = (data) => { 
      this.setState({
        studentUser: {
          outstandingPaymentsInfo: data.outstandingPaymentsInfo,
          completedPaymentsInfo: data.completedPaymentsInfo,
          studentInfo: data.studentInfo
        }
      })
  }

  loadRegister = (data) => {
    this.setState({
      studentUser: {
        outstandingPaymentsInfo: [],
        completedPaymentsInfo: [],
        studentInfo: data
      }
    })
  }

  loadStaffUser = (data) => { 
      this.setState({
        staffUser: {
          students: data.students,
          bulkPayees: data.bulkPayees,
          sessionPayees: data.sessionPayees,
          outstandingPaymentsInfo: data.outstandingPaymentsInfo,
          completedPaymentsInfo: data.completedPaymentsInfo,
          staffInfo: data.staffInfo
        }
      })
  }

  loadOutstandingPayments = (data) => {
    this.setState({
      staffUser: {
        students: this.state.staffUser.students,
        bulkPayees: this.state.staffUser.bulkPayees,
        sessionPayees: this.state.staffUser.sessionPayees,
        outstandingPaymentsInfo: data,
        completedPaymentsInfo: this.state.staffUser.completedPaymentsInfo,
        staffInfo: this.state.staffUser.staffInfo
      }
    })
  }

  onRouteChange = (routeGotten) => {

    this.setState({route: routeGotten});

  }

  onLogIn = () => {
    this.setState({loggedIn: true})
  }

  onLogOut = () => {
    this.setState({loggedIn: false, route: 'login'})

  }


  render(){
    const { route, loggedIn } = this.state;

    return(


        <div className="App">

          <div className="content">

          {
            loggedIn === false ?
            <NavbarComp onRouteChange={this.onRouteChange} />
            :
            <NavbarPortal onLogOut={this.onLogOut} />
          }

            {(
              route === 'home' ?
              <Home onRouteChange={this.onRouteChange} />
              :
              route === 'tutors' ?
              <Tutors />
              :
              route === 'services' ?
              <Services onRouteChange={this.onRouteChange} />
              : 
              route === 'login' ?
              <Login loadStudentUser={this.loadStudentUser} loadStaffUser={this.loadStaffUser} onRouteChange={this.onRouteChange} onLogIn={this.onLogIn} />
              :
              route === 'register' ?
              <Register loadRegister={this.loadRegister} loadStaffUser={this.loadStaffUser} onRouteChange={this.onRouteChange} onLogIn={this.onLogIn} />
              :
              route === 'studentPortal' ?
              <StudentPortal studentUser={this.state.studentUser} />
              :
              <StaffPortal loadOutstandingPayments={this.loadOutstandingPayments} staffUser={this.state.staffUser} />

            )}
            
            <Footer />
          
          </div>

        </div>
      )
  }
}

export default App;

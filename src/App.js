import React, {Component} from 'react';
import NavbarComp from './NavbarComp/NavbarComp';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Tutors from './Tutors/Tutors';
import Services from './Services/Services';
import StaffPortal from './StaffPortal/StaffPortal';
import StudentPortal from './StudentPortal/StudentPortal';
import Login from './Login/Login';

import './App.css';

import "bootstrap-4-react/dist/bootstrap-4-react";

class App extends Component {

  constructor(){
    super();

    this.state = {
      route: 'login',
      studentUser: {
        outstandingPaymentsInfo: [],
        completedPaymentsInfo: [],
        studentInfo: {}
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

  onRouteChange = (routeGotten) => {

    this.setState({route: routeGotten});
    
    
  }


  render(){
    const { route } = this.state;

    return(


        <div className="App">

          <div className="content">
        
            <NavbarComp onRouteChange={this.onRouteChange} />
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
              <Login loadStudentUser={this.loadStudentUser} onRouteChange={this.onRouteChange} />
              :
              route === 'studentPortal' ?
              <StudentPortal studentUser={this.state.studentUser} />
              :
              <StaffPortal  />

            )}
            
            <Footer />
          
          </div>

        </div>
      )
  }
}

export default App;

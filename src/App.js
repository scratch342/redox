import React, {Component} from 'react';
import NavbarComp from './NavbarComp/NavbarComp';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Tutors from './Tutors/Tutors';
import Services from './Services/Services';
import './App.css';

import "bootstrap-4-react/dist/bootstrap-4-react";

class App extends Component {

  constructor(){
    super();

    this.state = {
      route: 'home'
    }
  }

  onRouteChange = (routeGotten) => {

    this.setState({route: routeGotten});
    
    
  }


  render(){
    const { route } = this.state;

    return(
        <div className="App">
          <NavbarComp onRouteChange={this.onRouteChange} />
          {(
            route === 'home' ?
            <Home onRouteChange={this.onRouteChange} />
            :
            route === 'tutors' ?
            <Tutors />
            :
            <Services onRouteChange={this.onRouteChange} />
          )}
          
          <Footer />
        </div>
      )
  }
}

export default App;

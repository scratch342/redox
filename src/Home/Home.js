import React, {Component} from 'react';

class Home extends Component {


  constructor(props){
    super(props);
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
		<div>
		  <div className="jumbotron" style={{backgroundImage: 'url(jumbo.jpg)'}}>
		    <div className="container">
		      <div className="jumbo-text">
		        <h1 className="display-4">Redox Tutoring</h1>
		        <p className="lead">Results-orientated, comprehensive tutoring for Year 12 SACE Students taught by recent merit achievers</p>
		      </div>
		    </div>
		  </div>
		  <div className="container main-body">
		    <h1 className="text-center ace-title">
		      <b>Ace SACE the Redox way </b>
		    </h1>
		    <hr />
		    <p className="text-center">Throughout the tutoring process, our tutors aim to provide the same effective and robust learning approaches they used to receive merit results in all offered subjects. By beginning from the large conceptual ideas before delving into specific details and test-taking strategies, our tutoring aims to cover all bases in a time-efficient manner, preparing you to excel at every assessment that comes your way. </p>
		    <div className="row pic-container">
		      <div className="col">
		        <img className="home-pics" src="conceptual.png" />
		        <h3>Build strong conceptual understanding</h3>
		      </div>
		      <div className="col">
		        <img className="home-pics" src="details.png" />
		        <h3>Delve into the details</h3>
		      </div>
		      <div className="col">
		        <img className="home-pics" src="test.png" />
		        <h3>Hone your test-taking strategy to get those last few marks</h3>
		      </div>
		    </div>
		    <div className="row" style={{marginTop: '2rem'}}>
		      <div className="col-6">
		        <button onClick={this.onSubmitSignInTwo} className="btn btn-other tutors" style={{width: '100%'}}>Meet our tutors</button>
		      </div>
		      <div className="col-6">
		        <button onClick={this.onSubmitSignInThree} className="btn btn-other services" style={{width: '100%'}}>Explore services</button>
		      </div>
		    </div>
		    <div onClick={this.onRegisterInterest} className="btn btn-primary sign-up" style={{width: '100%', marginTop: '1em'}}>Click here to register your interest</div>
		  </div>
		</div>

		)
	}
}

export default Home;
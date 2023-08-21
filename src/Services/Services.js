import React, {Component} from 'react';

class Services extends Component {

	constructor(props){
    super(props);
  }

  onRegisterInterest = () => {
  	window.open("https://forms.gle/SDwrfyzdXWVyr76W6", "_blank");
  }



  render(){
    return(
        <div className="Services">
					<div className="container main-body">
					  <h1 className="about-title">Services</h1>
					  <div className="alert alert-primary" role="alert">
					    <b>All Chemistry and Biology spots are full</b> - only taking additional students for Methods and Physics
					  </div>
					  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
					    <ol className="carousel-indicators">
					      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
					      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
					    </ol>
					    <div className="carousel-inner">
					      <div className="carousel-item active">
					        <img className="d-block carousel-img" src="One-on-one.jpg" alt="One-on-one Tutoring" />
					        <div className="carousel-caption">
					          <h4>One-on-one Tutoring</h4>
					          <p>In-depth one-on-one tutoring tailored to fit your personal learning needs and academic goals.</p>
					          <hr />
					          <p className="price-carousel">$35/hr online, $5 in-person surcharge</p>
					        </div>
					      </div>
					      <div className="carousel-item">
					        <img className="d-block carousel-img" src="Drafting.jpg" alt="Drafting" />
					        <div className="carousel-caption">
					          <h4>Drafting</h4>
					          <p>Comprehensive and detailed assignment drafts provided by past A+/merit achievers in offered subjects.</p>
					          <hr />
					          <p className="price-carousel">Starting at $30 ($15 for regular students)</p>
					        </div>
					      </div>
					    </div>
					    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					      <span className="carousel-control-prev-icon" aria-hidden="true" />
					      <span className="sr-only">Previous</span>
					    </a>
					    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					      <span className="carousel-control-next-icon" aria-hidden="true" />
					      <span className="sr-only">Next</span>
					    </a>
					  </div>
					  <hr className="separator" />
					  <h1 className="subjects-title">Subjects</h1>
					  <div className="row">
					    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-3">
					      <div className="card" style={{height: '100%'}}>
					        <img className="card-img-top services-img" src="Bio.jpg" alt="Biology" />
					        <div className="card-header">
					          <h5 className="card-title">SACE Biology</h5>
					        </div>
					        <div className="card-body">
					          <p className="card-text">Taught by <b>Isaiah Ajaero</b>
					          </p>
					          <ul className="card-text">
					            <li>A+ with merit (19.7/20)</li>
					            <li>SHE Assignment won the Oliphant Trophy &amp; Australian Institute of Biochemistry and Molecular Biology Prize</li>
					          </ul>
					        </div>
					      </div>
					    </div>
					    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-3">
					      <div className="card" style={{height: '100%'}}>
					        <img className="card-img-top services-img" src="Chem.jpg" alt="Chemistry" />
					        <div className="card-header">
					          <h5 className="card-title">SACE Chemistry</h5>
					        </div>
					        <div className="card-body">
					          <p className="card-text">Taught by <b>Isaiah Ajaero</b>
					          </p>
					          <ul className="card-text">
					            <li>A+ with merit (19.9/20)</li>
					            <li>A+ in all tests, assignments and exam</li>
					          </ul>
					        </div>
					      </div>
					    </div>
					    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-3">
					      <div className="card" style={{height: '100%'}}>
					        <img className="card-img-top services-img" src="Physics.jpg" alt="Physics" />
					        <div className="card-header">
					          <h5 className="card-title">SACE Physics</h5>
					        </div>
					        <div className="card-body">
					          <p className="card-text">Taught by <b>Jaiden Douglas</b>
					          </p>
					          <ul className="card-text">
					            <li>A+ with merit (19.7/20)</li>
					            <li>First-year Computer Science (Advanced) Student at the University of Adelaide</li>
					          </ul>
					        </div>
					      </div>
					    </div>
					  
	
					    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-3">
					      <div className="card" style={{height: '100%'}}>
					        <img className="card-img-top services-img" src="Maths.jpg" alt="Methods" />
					        <div className="card-header">
					          <h5 className="card-title">SACE Methods</h5>
					        </div>
					        <div className="card-body">
					          <p className="card-text">Taught by <b>Andrew Jenke</b>
					          </p>
					          <ul className="card-text">
					            <li>A+ with merit (20/20)</li>
					            <li>First-year Mechanical Engineering Student at the University of Adelaide</li>
					          </ul>
					        </div>
					      </div>
					    </div>
					   </div>


					  <button onClick={this.onRegisterInterest} className="btn btn-primary sign-up-bottom sign-up">Click here to sign-up</button>
					</div>
        </div>
      )
  }
}

export default Services;

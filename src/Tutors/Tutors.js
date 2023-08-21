import React, {Component} from 'react';

class Tutors extends Component {

  render(){
    return(
        <div className="Tutors">
					<div className="container main-body">
					  <h1 className="about-title">Tutors</h1>
					  <div className="row">
					    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
					      <div className="card" style={{height: '100%'}}>
					        <img className="card-img-top about-img" src="Andrew.jpg" alt="Andrew Jenke" />
					        <div className="card-header">
					          <h5 className="card-title">Andrew Jenke</h5>
					          <p className="card-text sub-card">
					            <b>99.90 ATAR</b>
					          </p>
					        </div>
					        <div className="card-body">
					          <ul className="card-text">
					            <li>
					              <b>Dux of Concordia College 2022</b>
					            </li>
					            <li>A+ with merit in Mathematical Methods (perfect score of 20/20)</li>
					            <li>A+ with merit in Chemistry (19.9/20)</li>
					            <li>A+ with merit in Food and Hospitality (19.6/20)</li>
					            <li>First-year Mechanical Engineering Student at the University of Adelaide</li>
					            <li>Served as a Student Leader of Concordia College</li>
					          </ul>
					        </div>
					      </div>
					    </div>
					    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
					      <div className="card" style={{height: '100%'}}>
					        <img className="card-img-top about-img" src="Isaiah.jpg" alt="Isaiah Ajaero" />
					        <div className="card-header">
					          <h5 className="card-title">Isaiah Ajaero</h5>
					          <p className="card-text sub-card">
					            <b>99.65 ATAR</b>
					          </p>
					        </div>
					        <div className="card-body">
					          <ul className="card-text">
					            <li>A+ with merit in Chemistry (19.9/20), Recipient of Chemistry Subject Award at Concordia College 2022</li>
					            <li>A+ with merit in Biology (19.7/20)</li>
					            <li>A+ with merit in Research Project (9.75/10)</li>
					            <li>2 High Distinctions in the University of Adelaide Headstart Program, Semester 2 Top of Class</li>
					            <li>Served as Deputy Captain of Concordia College</li>
					          </ul>
					        </div>
					      </div>
					    </div>
					    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
					      <div className="card" style={{height: '100%'}}>
					        <img className="card-img-top about-img" src="Jaiden.jpg" alt="Jaiden Douglas" />
					        <div className="card-header">
					          <h5 className="card-title">Jaiden Douglas</h5>
					          <p className="card-text sub-card">
					            <b>99.65 ATAR</b>
					          </p>
					        </div>
					        <div className="card-body">
					          <ul className="card-text">
					            <li>A+ with merit in Physics (19.7/20)</li>
					            <li>Recipient of Mathematical Methods Subject Award at Concordia College 2022</li>
					            <li>First-year student at the University of Adelaide studying a Bachelor of Computer Science (Advanced)</li>
					            <li>Semester 1 Dux in the University of Adelaide Headstart Program</li>
					          </ul>
					        </div>
					      </div>
					    </div>
					  </div>
					</div>
        </div>
      )
  }
}

export default Tutors;

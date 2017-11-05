import React,{ Component } from 'react';
import '../style/home.css';

class Home extends Component{
	render(){
		return(
			<main role="main">
		      <section className="jumbotron text-center">
		        <div className="container">
		          <h1 className="jumbotron-heading">SaveSpace</h1>
		          <p>Something short and leading about the collection below—its contents,
		          the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over 
		          it entirely.</p>
				  <div>
					  <input className="form-control search" type="text" name="search" placeholder="Search Place"/>
					  <button className="btn default" type="button">Search</button>
				  </div>
		        </div>
		      </section>

			  <div className="row">
			    <div className="col-md-4">
		            <img className="icons" src={require('../images/open-book.png')}/>
		            <h2>Resources</h2>
		            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
			    </div>
			    <div className="col-md-4">
                    <img className="icons" src={require('../images/new_stories.png')}/>
		            <h2>Stories</h2>
                    <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
		        </div>
			    <div className="col-md-4">
                    <img className="icons" src={require('../images/new_new_diverse.png')}/>
		            <h2>Diverse Places</h2>
                    <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
			    </div>
			  </div>
			</main>
		)
	};
};

export default Home;
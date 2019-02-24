import React from 'react';
import {Container, Button} from 'semantic-ui-react';
import Rating from './rating'

export default class RatingPage extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			article1ranking: 1,
			article2ranking: 1,
			article3ranking: 1,
			article4ranking: 1,
			article5ranking: 1,
			hasSubmitted: false
		}
	}

	updateRating(articleNo, rating){
		//TODO: Wrap inside a try-catch and display an error in render if anything goes wrong
		switch(articleNo){
			case 1:
				this.setState({article1ranking: rating});
				break;
			case 2:
				this.setState({article2ranking: rating});
				break;
			case 3:
				this.setState({article3ranking: rating});
				break;
			case 4:
				this.setState({article4ranking: rating});
				break;
			case 5:
				this.setState({article5ranking: rating});
				break;
			default:
				throw new Error("Unknown article/rating.");
		}
	}

	//Here in this function we would prepare and POST the data to some API endpoint.
	//For now simply log it in the console, as it is hosted on Github pages and we have limited write access
	//with Github pages static files.
	logRating(){
		this.setState({hasSubmitted: true});
		console.log("Rating data prepared to be POSTed to some database/storage")
		console.log(this.state);
	}

	componentDidMount(){
		window.scrollTo(0, 0);
	}

	render(){
		if(this.state.hasSubmitted){
			return(
				<React.Fragment>
					<Container text>
						<h1>Thank you for reading the articles and submitting your ranking.</h1>
						<h2>Please view the developer console if you would like to see the submitted ranking.</h2>
					</Container>
				</React.Fragment>
			)
		}
		else{
			return(
				<React.Fragment>
					<Container text>
						<Rating updateRating={this.updateRating.bind(this)} articleName="Article 1" articleNo={1} />
						<Rating updateRating={this.updateRating.bind(this)} articleName="Article 2" articleNo={2} />
						<Rating updateRating={this.updateRating.bind(this)} articleName="Article 3" articleNo={3} />
						<Rating updateRating={this.updateRating.bind(this)} articleName="Article 4" articleNo={4} />
						<Rating updateRating={this.updateRating.bind(this)} articleName="Article 5" articleNo={5} />
						<Button onClick={this.logRating.bind(this)}>Submit</Button>
					</Container>
				</React.Fragment>
			)
		} 
	}
}
import React from 'react';
import ReactDOM from 'react-dom';
import ArticleContent from './content'
import { Button, Grid, Header, Icon, Container } from 'semantic-ui-react';
import RatingPage from './ratingpage';
import ErrorBoundary from './errorboundary';

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			currentIndex: 1,
			showPrev: false,
			reading: false
		};
	}

	render(){
		const headerStyle = {display: "block", magin: "0 auto"}
		const AppHeader = (<Header as="h2" style={{display: "block", margin: "0 auto", "text-align": "center", "padding-top": '1.5em'}}> 
							<img src="bbclogo.svg" alt="BBC" style={{"bottom": ".125em", "position": "relative"}}/> Article Ranker 
						</Header>);
		// Initial starting page
		if(this.state.reading === false){
			return(
				<ErrorBoundary>
					<React.Fragment>
						<Container text>
							{AppHeader}
							<div style={{"padding": "2em"}}>
							<p> Welcome to Tim's BBC Article Ranker. </p> 
							<p>Please take your time to read the 5 articles you are presented and rank them at the end. </p>
							</div>
							<Button onClick={(e) => this.setState({reading: true}) }> Start </Button>
						</Container>
					</React.Fragment>
				</ErrorBoundary>
				)
		}
		// Rating page if we have read all the articles
		if(this.state.currentIndex > 5){
			return(
				<ErrorBoundary>
					{AppHeader}
					<RatingPage />
				</ErrorBoundary>
			)
		}

		// Otherwise display the articles
		else{
			return(
				<ErrorBoundary>
					<React.Fragment>
					<Grid verticalAlign='middle' centered>
						<Grid.Row>
							<Grid.Column width={16}>
								{AppHeader}
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column width={8}>
								<ArticleContent style={{"padding-top": "-2em"}} 
									articleURL={"http://localhost:3000/article-"+this.state.currentIndex} 
								/>
								<Button onClick={(e) => this.nextArticle(e)}> Next Article </Button>
								{this.state.showPrev != 0 && <button> Previous Article </button>}
							</Grid.Column>
						</Grid.Row>
					</Grid>
					</React.Fragment>
				</ErrorBoundary>
			)
		}
	}

	nextArticle(e){
		e.preventDefault();
		console.log("button press");
		// The commented line of code below is used if you would like to circularly view the articles i.e. after Article 5, read Article 1.
		//this.setState({currentIndex: (this.state.currentIndex % 5) + 1});
		//Otherwise below...
		this.setState({currentIndex: (this.state.currentIndex) + 1});
	}

}

ReactDOM.render(
	<App />, document.getElementById("content")
	);
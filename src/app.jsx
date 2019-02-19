import React from 'react';
import ReactDOM from 'react-dom';
import ArticleContent from './content'
import { Button, Grid, Header, Icon, Container } from 'semantic-ui-react';
import Rating from './rating';

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			currentIndex: 1,
			showPrev: false,
			reading: false
		};
	}
	/* UNCOMMENT THIS FOR ACTUAL APP -> CURRENTLY TESTING RATING COMPONENT
	render(){
		const headerStyle = {display: "block", magin: "0 auto"}
		if(this.state.reading === false){
			return(
				<React.Fragment>
					<Container text>
						<Header as="h2" style={{display: "block", margin: "0 auto", "text-align": "center", "padding": '3em'}}> 
							<img src="bbclogo.svg" alt="BBC"/> Article Ranker 
						</Header>
						<p> Welcome to the BBC Article Ranker. </p> 
						<p>Please take your time to read the 5 articles you are presented and rank them at the end. </p>
						<Button onClick={(e) => this.setState({reading: true}) }> Start </Button>
					</Container>
				</React.Fragment>
				)
		}
		else{
			return(
				<React.Fragment>
				<Grid verticalAlign='middle' style={{"padding": '3em'}} centered>
					<Grid.Row>
						<Grid.Column width={16}>
							<Header as="h2" style={{display: "block", margin: "0 auto", "text-align": "center"}}> 
								<img src="bbclogo.svg" alt="BBC"/> Article Ranker 
							</Header>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column width={4}>
							<Icon name="chevron left" />
						</Grid.Column>
						<Grid.Column width={8}>
							<ArticleContent articleURL={"http://localhost:3000/article-"+this.state.currentIndex} />
							<Button onClick={(e) => this.nextArticle(e)}> Next Article </Button>
							{this.state.showPrev != 0 && <button> Previous Article </button>}
						</Grid.Column>
						<Grid.Column width={4}>
							<Icon name="chevron right" />
						</Grid.Column>
					</Grid.Row>
				</Grid>
				</React.Fragment>
			)
		}
	}
	*/

	render(){
		return <Rating />;
	}

	nextArticle(e){
		e.preventDefault();
		console.log("button press");
		this.setState({currentIndex: (this.state.currentIndex % 5) + 1});
	}

}

ReactDOM.render(
	<App />, document.getElementById("content")
	);
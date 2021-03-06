import React from 'react';
import axios from 'axios';
import { Container, Header, Placeholder, Image} from 'semantic-ui-react';

export default class ArticleContent extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			isLoaded: false,
			title: "",
			body: [],
			networkError: false
		};
	}

	componentDidMount() {
		this.getArticleContents();
	}

	componentDidUpdate(prevProps, prevState){
		if(this.props.articleURL != prevProps.articleURL){
			this.setState({isLoaded: false, title: "", body: []});
			this.getArticleContents();
			window.scrollTo(0, 0);
		}
	}

	getArticleContents(){
		axios.get(this.props.articleURL).then((response) => {
			this.setState({title: response.data["title"], body: response.data["body"], isLoaded: true});
		}).catch((error) => {
			this.setState({networkError: true});
		});
	}


	render(){
		if(this.state.isLoaded){
			return(
				<div id="application">
				<h1> {this.state.title} </h1>
				{this.state.body.map((content) => {
					switch(content.type){
						case "heading":
							return <Header as='h2'> {content.model.text} </Header>
							break;
						case "paragraph":
							return <p> {content.model.text} </p>
							break;
						case "image":
							return(
								<React.Fragment>
									{/* 
									Hacky way to show a placeholder image as the src is already set. 
									Not how I would like to do it!
									Not a good practice!
									*/}
									<div style={{"height": content.model.height+"px", "width": content.model.width+"px", 
										"background-color": "rgb(235,235,235)", "overflow":"hidden"
									}}>
										<Image 
										style={{"display": "block", "height": content.model.height, "width": content.model.width}} 
										src={content.model.url+"?"+Math.random()} 
										alt={content.model.altText}
										 />
									</div>
								</React.Fragment>
							)
						case "list":
							if(content.model.type == "unordered"){
								const items = content.model.items.map((item) => <li> {item} </li> );
								return <ul> {items} </ul>
							}
							break;
						default:
							return <p> Unknown item in JSON.</p>
					}
				})}
				</div>
			)
		}
		else if(this.state.networkError){
			return(
				<React.Fragment>
					<Container text>
						<h2> Network Error. Unable to retrieve article. </h2>
					</Container>
				</React.Fragment>
			)
		}
		else{
			return(
				<React.Fragment>
					<Placeholder>
						<Placeholder.Paragraph>
							<Placeholder.Line />
							<Placeholder.Line />
							<Placeholder.Line />
							<Placeholder.Line />
						</Placeholder.Paragraph>
						<Placeholder.Paragraph>
							<Placeholder.Line />
							<Placeholder.Line />
							<Placeholder.Line />
							<Placeholder.Line />
						</Placeholder.Paragraph>
					</Placeholder>
				</React.Fragment>
				)
		}
	}
}

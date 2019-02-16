import React from 'react'
import axios from 'axios';

export default class ArticleContent extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			isLoaded: false,
			title: "",
			body: []
		};
	}

	componentDidMount() {
		this.getArticleContents();
	}

	componentDidUpdate(prevProps, prevState){
		if(this.props.articleURL != prevProps.articleURL){
			this.getArticleContents();
		}
	}

	getArticleContents(){
		axios.get(this.props.articleURL).then((response) => {
			console.log(response.data);
			this.setState({title: response.data["title"], body: response.data["body"]});
		});
	}

	render(){
		return(
			<React.Fragment>
			{this.state.body.map((content) => {
				switch(content.type){
					case "heading":
						return <h2> {content.model.text} </h2>
						break;
					case "paragraph":
						return <p> {content.model.text} </p>
						break;
					case "image":
						console.log(content.model.url);
						return <img src={content.model.url} />
						break;
					case "list":
						if(content.model.type == "unordered"){
							const items = content.model.items.map((item) => <li> {item} </li> );
							return <ul> {items} </ul>
						}
						break;
					default:
						return <p> default </p>
				}
			})}
			</React.Fragment>
		)
	}
}

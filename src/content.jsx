import React from 'react'
import axios from 'axios';

/*
axios.get("http://localhost:3000/article-1").then(function (response){
	console.log(response.data);
	ReactDOM.render(
		<h1> {response.data["title"]} </h1>,
		document.getElementById('content')
		);
});
*/

export default class ArticleContent extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			isLoaded: false,
			data: "hello"
		};
	}

	componentDidMount() {
		console.log("componentDidMount");
		axios.get(this.props.articleURL).then((response) => {
			console.log(response.data["title"]);
			const x = response.data;
			this.setState({data: x});
		});
	}

	render(){
		return <p> {this.state.data["title"]} </p>;
	}
}

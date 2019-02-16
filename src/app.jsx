import React from 'react';
import ArticleContent from './content'

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			currentIndex: 1,
			showPrev: false
		};
	}

	render(){
		return(
			<React.Fragment>
				<ArticleContent articleURL={"http://localhost:3000/article-"+this.state.currentIndex} />
				<button onClick={(e) => this.nextArticle(e)}> Next Article </button>
				{this.state.showPrev != 0 && <button> Previous Article </button>}
			</React.Fragment>
		)
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
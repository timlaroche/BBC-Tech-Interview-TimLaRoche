import React from 'react';
import ArticleContent from './content'

class App extends React.Component {
	render(){
		return(
			<div>
				<h1> Article 1 </h1>
				<ArticleContent articleURL="http://localhost:3000/article-1" />
			</div>
		)
	}
}

ReactDOM.render(
	<App />, document.getElementById("content")
);
import React from 'react';
import {Container} from 'semantic-ui-react';
import Rating from './rating'

export default class RatingPage extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<Container text>
				<Rating articleName="Article 1" />
				<Rating articleName="Article 2" />
				<Rating articleName="Article 3" />
				<Rating articleName="Article 4" />
				<Rating articleName="Article 5" />
			</Container>
		) 
	}
}
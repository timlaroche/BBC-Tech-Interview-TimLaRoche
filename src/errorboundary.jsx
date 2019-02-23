import React from 'react';

export default class ErrorBoundary extends React.Component {
	constructor(props){
		super(props);
		this.state = { hasError: false}
		this.createError = this.createError.bind(this);
	}

	componentDidCatch(error, info){
		this.setState({ hasError: true, error: error, info: info});
	}

	createError(){
		this.setState({ hasError: true, error: error, info: info});
	}

	render(){
		if(this.state.hasError){
			return <h1> Something went wrong. {this.state.error} </h1>
		}
		return this.props.children
	}
}
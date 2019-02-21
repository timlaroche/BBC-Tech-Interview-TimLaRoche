import React from 'react'
import { Header, Image, Form, Container, Radio } from 'semantic-ui-react';

export default class Rating extends React.Component{

	constructor(props){
		super(props)
		this.state = {value: 1};
	}

	handleChange = (e, { value }) => this.setState({ value })

	render(){
		return(
			<Form>
					<Header as='h1'> {this.props.articleName} </Header>
					<Form.Field>
						Selected rating: <b>{this.state.value}</b>
					</Form.Field>
					<Form.Field>
						<Radio 
						label="1" 
						name="radioGroup" 
						value="1" 
						checked={this.state.value == 1} 
						onChange={this.handleChange} 
						defaultChecked
						/>
					</Form.Field>
					<Form.Field>
						<Radio 
						label="2" 
						name="radioGroup" 
						value="2" 
						checked={this.state.value == 2} 
						onChange={this.handleChange} 
						/>
					</Form.Field>
						<Form.Field>
						<Radio 
						label="3" 
						name="radioGroup" 
						value="3" 
						checked={this.state.value == 3} 
						onChange={this.handleChange} 
						/>
					</Form.Field>
						<Form.Field>
						<Radio 
						label="4" 
						name="radioGroup" 
						value="4" 
						checked={this.state.value == 4} 
						onChange={this.handleChange} 
						/>
					</Form.Field>
						<Form.Field>
						<Radio 
						label="5" 
						name="radioGroup" 
						value="5" 
						checked={this.state.value == 5} 
						onChange={this.handleChange} 
						/>
					</Form.Field>
				</Form>
			)
	}
}
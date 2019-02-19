import React from 'react';
import { Image, Item } from 'semantic-ui-react';

export default class Rating extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		const items = [
		  {
		    childKey: 0,
		    image: '/images/wireframe/image.png',
		    header: 'Header',
		    description: 'Description',
		    meta: 'Metadata',
		    extra: 'Extra',
		  },
		  {
		    childKey: 1,
		    image: '/images/wireframe/image.png',
		    header: 'Header',
		    description: 'Description',
		    meta: 'Metadata',
		    extra: 'Extra',
		  },
		]

		return <Item.Group items={items} />
	}
}
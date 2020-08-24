import React, {component} from 'react'

export default class Project3 extends React.Component {
	constructor(){
		super()
		this.state={
			count:0

		}
	}
	inc(){
		this.setState({
			count:this.state.count+1
		})
	}
		
	render() {
		return (
			<div>
				<h1>{ this.state.count }</h1>
				<button onClick={ ()=> this.inc() }> Increment </button>
			</div>
		)
	}
}


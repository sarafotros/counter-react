import React, { Component } from 'react';

class Counter extends Component {
	state = {
        count: 0
    };
    
	handleIncrement = product => {
		console.log(product);
		
       this.setState({ count: this.state.count + 1 })
    }
   
	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
	getBadge() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes;
	}

    render() {
       
		return (
			<React.Fragment>
				<span className={this.getBadge()}>
					{' '}
					{this.formatCount()}
				</span>
				<button onClick={() => this.handleIncrement(this.product)} className="btn btn-secondary btn-sm">Increment</button>
				<button onClick={this.handleDelete} className="btn btn-danger btn-sm-m2">Delete</button>
               
			</React.Fragment>
		);
	}

 
}
 
export default Counter;
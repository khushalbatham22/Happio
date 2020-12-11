import React, { Component } from 'react';

class Total extends Component {
    render() {
        return (
            <div>
                <hr/>
                <h3 className="bg-success rounded p-4">Total Amount: ${this.props.total}</h3>
            </div>
        );
    }
}

export default Total;
import React, { Component } from 'react';

class Products extends Component {
    state={
        qty: 0
    }

    buy = () => {
        this.setState({qty:this.state.qty+1})
        this.props.handleTotal(this.props.price)
    }

    showProductHere = (name, price) => {
        this.props.handleShow(this.props.name, this.props.price)
    }

    render() {
        return (
            <div className="mx-auto">
              
              {/* =================Card================ */}
                <div className="card mx-auto my-2" style={{width:"80%"}}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                <div className="my-auto">
                                    <div>
                                        <h5 className="card-title">{this.props.name}</h5>
                                        <i className="fas fa-create"></i>
                                    </div>
                                    <p className="card-text">Price: ${this.props.price}</p>
                                    <h6>Qty: {this.state.qty} item(s)</h6>
                                    <div className="d-flex justify-content-around">
                                        <button 
                                            className="btn btn-primary px-4"
                                            onClick={
                                                this.showProductHere
                                        }>Show
                                        </button>
                                        <button 
                                            className="btn btn-primary px-4"
                                            onClick={
                                                this.buy
                                        }>Buy
                                        </button>
                                    </div>
                                </div>                                                                
                            </div>    
                            <div className="col-4">
                                <div className="my-auto">
                                    <button 
                                        className="btn btn-warning my-3"
                                    >
                                        <i className="fa fa-edit pr-2"></i><span>Edit Item</span>
                                    </button><br/>
                                    <button 
                                        className="btn btn-danger my-3"
                                        // onClick={this.deleteItem}
                                    >
                                        <i className="fa fa-trash pr-2"></i><span>Delete Item</span>
                                    </button>
                                </div>                                
                            </div>                
                        </div>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Products;
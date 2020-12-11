import React, { Component } from 'react';

class AddNewProduct extends Component {

    onSubmit = (e) =>{
        e.preventDefault();
        
        // alert(`Name: ${this.refs.name.value} \nPrice: $${this.refs.price.value}`)

        let newProduct = {
            name: this.refs.name.value,
            price: this.refs.price.value
        }

        this.props.handleCreate(newProduct)

        this.refs.name.value="";
        this.refs.price.value="";

    }
    render() {
        return (
            <div className="mt-0">
                <h3>Add New Product</h3>
                
                <form>
                    <div className="form-group">
                        <label className="float-left" for="exampleInputEmail1">Product</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name" ref="name" />
                    </div>
                    <div className="form-group">
                        <label className="float-left" for="exampleInputPassword1">Price</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Product Price" ref="price"/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block"
                        onClick={this.onSubmit}
                    >Create Product</button>
                </form>
            </div>
        );
    }
}

export default AddNewProduct;
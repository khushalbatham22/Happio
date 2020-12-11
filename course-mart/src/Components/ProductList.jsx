import React, { Component } from 'react';
import AddNewProduct from './AddNewProduct';
import Products from './Products';
import Total from './Total';

class ProductList extends Component {

    state={
        total:0,
        productList: [
            {
                name: "Android",
                price:120
            },
            {
                name: "Apple",
                price:130
            },
            {
                name: "Microsoft",
                price:100
            }
        ]
    }

    createNewProduct = (newProduct) =>{
        this.setState({
            productList: this.state.productList.concat(newProduct)
        })
    }

    calculateTotalPrice = (price) => {
        this.setState({total: this.state.total + price})
    }

    showProduct = (name, price) => {
        alert("Product name is: " +name+ `\nPrice is: `+ price)
    }

    render() {
        return (
            <div>
                <h1 className="p-3 m-1 bg-primary border border-primary">Welcome to Mobile Mart</h1>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8">
                        {
                            this.state.productList.map((val, id)=>{
                                return(
                                    <Products
                                        name={val.name}
                                        price={val.price}
                                        handleShow={this.showProduct}
                                        handleTotal={this.calculateTotalPrice}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-3 mx-auto my-auto">
                        <AddNewProduct 
                            handleCreate={this.createNewProduct}
                        />
                    </div>
                </div>
                
                <Total                     
                    total={this.state.total}
                />
            </div>
        );
    }
}

export default ProductList;
import React, { Component, useState } from 'react';
import Modal from 'react-modal'
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from './Banner';
import logo from '../images/logo.png';
import Categories2 from './Categories2';

class Header1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showContent: false,
            value: 121212,
        }
        this.toggleContent = this.toggleContent.bind(this)
    }
    toggleContent(event) {
        event.preventDefault()
        this.setState({
            showContent: !this.state.showContent
        })
    }

    render() {
        const { showContent } = this.state;
        const customStyles = {
            top: '40%',
            right: 'auto',
            bottom: 'auto',
        };
        return ( 
            <>
            <div>
            <Modal
            // show={this.state.showContent}
            // onHide={this.toggleContent}
            className = "bg-dark h-100 overlay-content"
            style = { customStyles }
            isOpen = { this.state.showContent }
            onRequestClose = { this.toggleContent }
            shouldCloseOnEsc = { false } >
            <a href = ""
            className = "btn closebtn text-white"
            onClick = { this.toggleContent } >
                 X 
            </a > 
            <div className = "text-center col-12" style = { customStyles } >
            <div className = "text-center w-50 mx-auto" > 
                < h3 className = "text-light" > Find Profile </h3>
            </div >
            <div className = "input-group col-sm-12 col-md-8 col-lg-6 mx-auto searchProfile" >
            <input 
                style = {{ height: "60px", borderRadius: "20px 0 0 20px" } }
                type = "text"
                className = "form-control bg-light"
                placeholder = "Indtast navn" 
            />                
                <div className = "input-group-append" >
                <button 
                    style = {{ height: "60px", borderRadius: "0 20px 20px 0" } }
                    type = "submit"
                    className = "btn bg-light text-dark" 
                >
                    <i className = "fa fa-search" > </i> 
                </button >
                </div>  
            </div>                      
            </div>                          
            </Modal>
                <header>
                    <div className = { `${showContent == true ? 'd-none' : 'd-block header-main fixed-top bg-dark'}` } >
                        <div className = "container-fluid" >
                            <div className = "logo " >
                                <a href = "home.html" > 
                                    < img src = { logo } alt = "logo" /> 
                                </a>            
                            </div>  
                            <div>
                                <a href = "#" className = "btn register-btn text-light" > Tilmeld profil </a>
                                <a href = "#" className = "btn login-btn text-light" > Log ind </a>  
                                <a className = "btn btn-search text-light" onClick = { this.toggleContent } >
                                    Find profil < i className = "fas fa-search"> </i> 
                                </a> 
                            </div>
                        </div>
                    </div>
                </header> 
                <div className = { `${showContent == true ? 'd-none' : 'd-block'}` } >
                    <Banner />
                    <Categories2 />
                </div> 
            </div> 
            </>
        );
    }
}

export default Header1;
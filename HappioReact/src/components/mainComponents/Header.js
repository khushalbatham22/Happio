import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import logo from '../../images/logo.png';
import Button from '../commonComponents/Button';
import Input from '../commonComponents/Input';

class Header extends Component {

    render() {
        
        return ( 
            <>
                <div 
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    }} 
                    className="modal fade search-popup show" id="search-btn" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">                                
                                <h2>Find profil</h2>
                                <div className="search-box">
                                    <Input 
                                        className="form-control" 
                                        placeholder="Indtast navn" 
                                        type="text"
                                    />
                                    <a href="search-results.html" className="btn btn-search"><i className="fas fa-search"></i></a>
                                </div>                                
                                <a className="close-btn" data-dismiss="modal" alt="closebtn">
                                    <i className = "fa fa-times fa-lg" style={{color:"#d1a907"}} > </i>                  
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <header>
                    <div className = 'd-block header-main bg-dark'>
                        <div className = "container-fluid d-flex justify-content-between" >
                            <div className = "logo">
                                <Link to="/">
                                    <img src = { logo } alt = "logo" />
                                </Link>
                            </div>  
                            <div className="my-auto">
                                <Link to="/register-profile">
                                    <Button className = "btn register-btn text-light" > Tilmeld profil </Button>
                                </Link>
                                <Link to="/login">
                                    <a href = "#" className = "btn login-btn text-light" > Log ind </a>  
                                </Link>
                                <a className = "btn btn-search text-light"  data-toggle="modal" 
                                    data-target="#search-btn" 
                                >
                                    Find profil < i className = "fas fa-search"> </i> 
                                </a> 
                            </div>
                        </div>
                    </div>                    
                </header>
            </>
        );
    }
}

export default Header;
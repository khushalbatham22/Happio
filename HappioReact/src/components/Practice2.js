import React, { useState, Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dummy from '../dummy/dummy.json';
import image from '../images/photo-25.jpg';
import '../styles/custom.css';  
import { Button } from 'react-bootstrap';
import { Modal } from 'react-modal';
import ScrollArrow from './ScrollArrow';

export class Practice2 extends Component {
    render() {
        const catList = {
            width: 'auto',
            marginRight: '10px'
        }
        return (
            <div>
                <header>
                    <div class="header-main">
                        <div class="container-fluid">
                            <div class="logo">
                                <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
                            </div>
                            <a href="#" class="btn register-btn">Tilmeld profil</a>
                            <a href="#" class="login-btn">Log ind</a>
                            {/* <button class="btn btn-search" data-toggle="modal" data-target="#search-btn">Find profil<i class="fas fa-search"></i></button> */}
                            <button className="btn btn-search">
                            Find profil<i class="fas fa-search"></i>
                            </button>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </header>

                {/* ==============================Header============================= */}

                <div className="modal fade search-popup show" id="search-btn" tabindex="-1" role="dialog" style={{display: 'block', paddingLeft: '16px'}}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <h2>Find profil</h2>
                                <div className="search-box">
                                    <input className="form-control" placeholder="Indtast navn" type="text"/>
                                    <a href="search-results.html" className="btn btn-search"><i className="fas fa-search"></i></a>
                                </div>
                                <a onClick><img src="images/close.svg" className="close-btn" dataDismiss="modal" alt="closebtn"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Practice2
import React from 'react'
import {Link} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'


import image1 from '../images/photo-25.jpg'
import dummy from '../dummy/dummy.json'
import image from '../images/celebrity-photo.jpg'
import video from '../images/profile-bio-video.mp4'
import video1 from '../images/video1.mp4'

function Detail(props) {
    const option1={
        0: { 
            items: 2,
        },
        450: {
            items: 3,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    }
    return (
        <div>
            <section>
                <div className="celebrity-profile-box">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-0 col-md-4 offset-md-4">
                            <div className="celebrity-profile-photo">
                                <img src={image}/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div class="celebrity-name">Linda P.<br/><span>Komiker</span></div>
                            <p>Linda P. er en dansk stand-up komiker, skuespillerinde og manuskriptforfatter. Hun har optrådt med adskillige one-man-shows og har medvirket i både film og tv-programmer. Linda P har i flere af sine projekter arbejdet sammen med komiker Christina Sederqvist, bl.a. som komikerduoen Winnie og Karina.</p>
                            <a href="#" className="btn btn-sign-in">Anmod om hilsen 320 kr.</a><br/>
                            <a href="#" className="link">Hvordan virker det?</a>
                        </div>
                        <div className="col-lg-3 offset-lg-1 col-md-4 offset-md-2">
                            <a href="#" className="donated-btn"><i className="fas fa-heart"></i>Pengene doneres til Røde Kors</a>
                            <div className="video-area-profile">
                                <video id="profile-bio-video" playsInline="" autoPlay="" loop="" muted="" preload="none">
                                    <source src={video} type="video/mp4"/>
                                </video>
                                <a className="volume-icon"><div className="icon mute"></div></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="watch-videos-box">
                    <h2>Se videoer Linda P. har lavet til andre <a href="#">Vis alle</a></h2>
                    <div className="row">
                        <VideoList/>
                        <VideoList/>
                        <VideoList/>
                        <VideoList/>
                        <VideoList/>
                        <VideoList/>
                    </div>
                </div>
                <div>
                    <div className="also-see-box">
                        <div className="title">Se også</div>
                        <h2>Komikere <a href="#">Vis alle</a></h2>

                        <div className="celebrity-slider owl-carousel owl-theme owl-loaded">
                            {
                                <OwlCarousel
                                    dots={false}
                                    margin={10}
                                    responsive={option1}
                                >
                                   {
                                    dummy.map((data)=>{
                                        console.log(data)
                                        data.person.map((d,j)=>{
                                            console.log(`Hello world ${d.first_name}`, d)
                                            return(
                                                <div className="item" key={j}>
                                                    <div className="celebrity_box">
                                                        <a href="#">
                                                            <img src={image1} alt="Image"/>
                                                            <div className="bg"></div>
                                                            <div className="price">320 kr.</div>
                                                            <div className="name">{d.first_name} {d.last_name}<span className="d-block">Comedian</span></div>
                                                        </a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    })
                                   }
                                </OwlCarousel>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Detail;

const VideoList = () => {
    return(
        <div className="col-lg-2 col-md-4">
            <div className="video-box">
                <video id="video4">
                    <source src={video1} type="video/mp4"/>
                </video>
                <button className="play" data-id="video4"><i className="fas fa-play"></i></button>
            </div>
        </div>
    )
}        
                    
                
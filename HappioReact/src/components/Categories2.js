import React, { Component } from 'react'

import dummy from '../dummy/dummy.json'
import image from '../images/photo-25.jpg'
import catImg from '../images/categories.png'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

class Categories2 extends Component {
    
    render() {
        return (
            <>
            <section>
{/* =======================================Category List================================ */}
                <div className="black-bg">
                        <OwlCarousel                            
                            className="text-center categories-name"                    
                            items={6}
                            autoWidth={true}   
                            margin={10}                         
                            responsive={
                                {
                                    0: {
                                        items: 3,
                                    },
                                    450: {
                                        items: 4,
                                    },
                                    600: {
                                        items: 4,
                                    },
                                    1000: {
                                        items: 6,
                                    }
                                }
                            }
                        >                                
                            <div className="item">                                    
                                <a href="#" className="active">Alle</a>                                    
                            </div>
                            <div className="item">                                    
                                <a href="#">Sport</a>                                    
                            </div>
                            <div className="item">                                    
                                <a href="#">Musik</a>                                    
                            </div>
                            <div className="item">                                    
                                <a href="#">Film og TV</a>                                    
                            </div>
                            <div className="item">                                    
                                <a href="#">Sociale medier</a>                                    
                            </div>
                            <div className="item">                                    
                                <a href="#">Debat</a>                                    
                            </div>
                        </OwlCarousel>                    
                </div>
{/* ===================================== Individual Categories ========================================== */}
                <ShowCategories />
            </section>
        </>
        )
    }
}

class ShowCategories extends React.Component{
   
    render(){
        const option1 = {
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
            },
            option2 = {
                0: {
                    items: 1,
                },
                450: {
                    items: 2,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 4,
                }
            };
        
        return(                
            dummy.map((data, i) =>{          
                console.log(data)
                return(
                <div className={`${data.catId=='K1'? 'categories-area':data.catId=='mpv'? 'most-popular-videos-area': 'slider-box'}`} key={i}>                     
                <h2>{dummy[i].category_name} <a href="#">Vis alle</a></ h2>
                <div className={`${data.catId=='K1'? 'categories-slider':data.catId=='mpv'? 'popular-videos-slider': 'celebrity-slider'} owl-carousel owl-theme owl-loaded owl-text-select-on`}>                                
                    {
                        data.catId == 'K1'||data.catId == 'mpv'? 
                        <OwlCarousel
                            dots={false}
                            margin={20}
                            responsive={option2}
                        >
                        {
                            data.person.map((d, j) =>{
                                return(                        
                                    <div className="item" key={j}>
                                        <div className={`${d.catId=='K1'? 'cate_box': 'celebrity_box'}`}>
                                            <a href="detail.html">
                                                {/* <img src="" alt="Image"/> */}
                                                {/* <img src={d.avatar} alt="Image"/> */}
                                                {/* <img src={require('../images/photo-12.jpg')}/> */}
                                                {/* <img src='../../src/images/photo-25.jpg'/> */}
                                                <img src={catImg} alt="Image"/>
                                                <div className="bg"></div>
                                                <div className={`${data.catId=='K1'? 'd-none': 'price'}`}>320 kr.</div>
                                                <div className="name">{d.first_name} {d.last_name}<span className={`${data.catId=='K1'? 'd-none': 'd-block'}`}>{d.category}</span></div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </OwlCarousel>
                            :
                        <OwlCarousel
                            dots={false}
                            margin={10}
                            responsive={option1}
                        >
                        {
                            data.person.map((d, j) =>{
                                console.log(d.avatar)
                                return(                        
                                    <div className="item" key={j}>
                                        <div className={`${d.catId=='K1'? 'cate_box': 'celebrity_box'}`}>
                                            <a href="detail.html">
                                                {/* <img src={d.avatar} alt="Image"/> */}
                                                {/* <img src={require(`../images/photo-25.jpg`)} alt="Image"/> */}
                                                {/* <img src={require(`/images/photo-25.jpg`)} alt="Image"/> */}
                                                {/* <img src="cypherinc\src\images\photo-25.jpg"/> */}
                                                {/* require(`./icons/${image}.png`) */}
                                                <img src={image} alt="Image"/>
                                                <div className="bg"></div>
                                                <div className={`${data.catId=='K1'? 'd-none': 'price'}`}>320 kr.</div>
                                                <div className="name">{d.first_name} {d.last_name}<span className={`${data.catId=='K1'? 'd-none': 'd-block'}`}>{d.category}</span></div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </OwlCarousel> 
                    }                    
                </div>
                </div>
                )                                   
            })                                       
        )                
    }
}

export default Categories2


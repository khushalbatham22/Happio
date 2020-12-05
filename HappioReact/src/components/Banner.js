import React from 'react'

import deviceImg from '../images/devices_desktop.png'
import video from '../images/topvideo.mov'

function Banner() {
    return ( 
        <>
        <section>
        <div className = "top-main-area" >
        <div className = "top-image" >
        <div className = "content" >
        <div className = "leftside" >
        <h3> Personlige < br /> hilsener < br /> fra de kendte </h3>
         <ul className = "menu" >
        <li> < a href = "#" > Find en < br/> profil </a></li >
        <li> < a href = "#" > Køb en < br /> hilsen </a></li >
        <li> < a href = "#" > Glæd en < br /> ven! </a></li >
        <div className = "clearfix" > </div>
        </ul> 
        </div> 
        <div className = "rightside">
        <div className = "device-area" >
        <img src = { deviceImg }/> 
        <div className = "video-area-profile" >
        <video 
            id = "profile-bio-video"
            playsInline = ""
            autoPlay = ""
            loop = ""
            muted = ""
            preload = "none" 
        >
            <source 
                // src = "/images/topvideo.mov"
                src={video}
                type = "video/mp4" 
            />
        </video> 
        </div> 
        </div> 
        </div> 
        </div> 
        </div> 
        </div> 
        </section>
        </>
    )
}

export default Banner;
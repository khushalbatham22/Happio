import React from 'react'
import fb from '../images/facebook.svg'
import insta from '../images/instagram.svg'

function Footer() {
    return ( 
        <footer>
        <div className = "footer_main" >
        <div className = "row justify-content-between" >
        <div className = "col-xl-4 col-md-12" >
        <h3> Hold dig opdateret: Få Happios nyhedsbrev </h3> 
        <p> Få besked når din yndlingsprofil kommer på Happio </p> 
        <div className = "subscribe-area" >
        <input 
            type = "text"
            className = "form-control"
            placeholder = "Din e-mail" 
        />
        <button className = "btn btn-send" > Tilmeld </button>  
        </div>  
        </div> 
        <div className = "col-xl-4 col-md-12" >
        <a href = "#" className = "btn register-btn py-2 mt-0 mt-md-2 mt-sm-2 mt-xs-2" > Tilmeld profil </a> 
        <ul className = "link">
        <li>< a href = "#" > Presse </a></li >
        <li>< a href = "#" > Om Happio </a></li >
        <li>< a href = "#" > Betingelser </a></li >
        <li>< a href = "#" > FAQ </a></li >
        <li>< a href = "#" > Kontakt </a></li >
        <li>< a href = "#" > Privatlivspolitik </a></li>
        </ul>  
        <ul className = "social" >
        <li> 
            <a href = "#" style = {{ textDecoration: 'none' } } > < img src = { fb } alt = "facebook" /> </a> 
        </li>  
        <li> 
            < a href = "#" style = {{ textDecoration: 'none' } } > < img src = { insta } alt = "instagram" /> </a></li >
        </ul>  
        </div> 
        </div>  
        </div>  
        <div className = "copyright_area" >
        <p> Copyright© < a href = "index.html" > Happy Day Group. </a></p >
        </div>  
        </footer> 
    )
}

export default Footer;
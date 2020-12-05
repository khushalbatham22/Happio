import React from 'react';

import Button from './commonComponents/Button';
import Input from './commonComponents/Input';

function Logind() {
    return (
        <>
          <section>
            <div className="login-page text-center">
                <div className="login-area border_bottom">
                    <div className="content user-login mx-auto">
                        <h2 className="text-light">Log ind</h2>                        
                        <Button href="#" 
                            className="btn login-facebook"
                        >
                            <i className="fab fa-facebook fa-2x float-left"></i>Log ind med Facebook
                        </Button>
                        <div className="line"></div>
                        <Input 
                            className="form-control mx-auto" 
                            placeholder="Email" 
                            type="text"
                        />
                        <Input 
                            className="form-control mx-auto" 
                            placeholder="Password" 
                            type="password"
                        />
                        <Button 
                            className="btn btn-login"
                        >
                            Log ind
                        </Button>
                        <p className="text-light">
                            <strong>Glemt kodeord?</strong> 
                            <a href="#" style={{color:"#d1a907"}}>Klik her</a><br/>
                            Har du ikke en konto endnu, kan du oprette en 
                            <a href="#" style={{color:"#d1a907"}}>her</a>
                        </p>
                    </div>
                </div>
                <div className="login-area">
                    <div className="content celebrity-login">
                        <h2 className="text-light">Log ind som Profil</h2>
                        <Input 
                            className="form-control mx-auto" 
                            placeholder="Email" 
                            type="text"
                        />
                        <Input 
                            className="form-control mx-auto" 
                            placeholder="Password" 
                            type="password"
                        />
                        <Button 
                            className="btn btn-login-full"
                        >
                            Log ind
                        </Button>
                        <p className="text-light">
                            <strong>Glemt kodeord?</strong> 
                            <a href="#" style={{color:"#d1a907"}}>Klik her</a><br/>
                            Har du ikke en konto endnu, kan du oprette en 
                            <a href="#" style={{color:"#d1a907"}}>her</a>
                        </p>
                    </div>
                </div>
			</div>
          </section>
        </>
    );
}

export default Logind;
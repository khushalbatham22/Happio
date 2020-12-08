import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/mainComponents/Footer';
import ScrollArrow from './components/mainComponents/ScrollArrow';
import Header from './components/mainComponents/Header';
import Logind from './components/Logind';
import Home from './components/Home';
import Detail from './components/Detail';

class App extends React.Component {

  render(){
    return (
      <div> 
        <Header/>
        {/* <ScrollArrow/> */}

        <Switch>
          
          {/* =============Header Section Routes=============== */}
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Logind} />
          <Route path="/register-profile"/>

          {/* ==============Main Section Routes================= */}
          <Route path="/details" component={Detail} />

          {/* ==============Footer Section Routes================ */}
          <Route path="/hurry" />
          <Route path="/conditions" />
          <Route path="/contact" />
          <Route path="/hurry" />
          <Route path="/about-us" />
          <Route path="/faq" />
          <Route path="/privacy-policy" />
        </Switch>
        
        <Footer/>  
      </div>
    );
  }

}

export default App;
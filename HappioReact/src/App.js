import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/mainComponents/Footer';
import ScrollArrow from './components/mainComponents/ScrollArrow';
import Header from './components/mainComponents/Header';
import Logind from './components/Logind';
import Home from './components/Home';

class App extends React.Component {

  render(){
    return (
      <div> 
        <Header/>
        <ScrollArrow/>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Logind} />
          <Route path="/register-profile"/>
        </Switch>
        
        <Footer/>  
      </div>
    );
  }
}

export default App;
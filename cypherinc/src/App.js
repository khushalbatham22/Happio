import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from './components/Header1';
import Footer from './components/Footer';
import ScrollArrow from './components/ScrollArrow';

class App extends React.Component {

  render(){
    return (
      <div className="App">      
        <Header/>
      </div>
    );
  }
}

class Header extends React.Component {

  state={
    data: "This is state data of Header Component",
    apiData: null
  }
  
  render() {
    
    return (
      <div>
        <ScrollArrow />             
        <Header1 />
        <Footer/>
      </div>
    );
  }
}

export default App;
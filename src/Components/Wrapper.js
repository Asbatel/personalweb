import React, { Component } from 'react';
import Header from './Header';
import '../App.css';
import Footer from './Footer';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import ReactLoading from 'react-loading';


class Wrapper extends Component {
  render() {
    if(this.props.data){
      var main = this.props.data.main;
      var resume = this.props.data.resume;
      var portfolio = this.props.data.portfolio;

    }
      return (
        <div className="App">
          <Header data={main}/>
          <About data={main}/>
          <Resume data={resume}/>
          <Portfolio data={portfolio}/>
          <Footer data={main}/>
        </div>  );

  }
}

export default Wrapper;

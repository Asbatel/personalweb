import React, { Component } from 'react';
import ReactGA from 'react-ga';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';

export default class Loading extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        foo: 'bar',
        resumeData: {}
      };

      ReactGA.initialize('UA-109126946-6');
      ReactGA.pageview(window.location.pathname);

    }

    getResumeData(){
      $.ajax({
        url:'resumeData.json',
        dataType:'json',
        cache: false,
        success: function(data){
          this.setState({resumeData: data});
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
          alert(err);
        }
      });
    }

    componentDidMount(){
      setTimeout(() => {
      this.getResumeData();
    }, 1200);
      ;
    }

  render() {
    return (
      <div>
        {!this.state.resumeData ? (
          <ReactLoading type={"bars"} color={"white"} />
        ) : (
          <div className="App">
            //<Header data={this.state.resumeData.main}/>
            <About data={this.state.resumeData.main}/>
            <Resume data={this.state.resumeData.resume}/>
            <Portfolio data={this.state.resumeData.portfolio}/>
            <Footer data={this.state.resumeData.main}/>
          </div>
        )}
      </div>
    );
  }
}

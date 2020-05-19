import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactTypingEffect from 'react-typing-effect';

class Header extends Component {
  render() {
    if(this.props.data){
      var mainpic= "images/me/"+this.props.data.main_image;
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var intro = this.props.data.intro;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
      })
    }

    return (

      <header id="home">
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	       <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
         </ul>

      </nav>



        <div className="row banner frame">
        <LazyLoadImage className="main-pic"  src={mainpic} alt="asbat pic" />
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3 className="aboutself">{intro}</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
          </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;

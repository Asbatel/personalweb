import React, { Component } from 'react';
import Resume from '../resume/Asbat_ElKhairi_CV.pdf';
import ReactGA from 'react-ga';
class About extends Component {

  constructor(props){
    super(props);
    ReactGA.initialize('UA-109126946-6');
  }


  render() {

    const SendOutboundEvent = (e) => {
    console.log(e.target.href);
    const link = e.target.href;
    ReactGA.outboundLink({
      label: link
    }, () => {
      console.log('event sent', link);
    });
  };

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/me/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
                   <span className="whitening">{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={Resume} onClick={SendOutboundEvent} className="button" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;

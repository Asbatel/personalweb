import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var uni_imagePath = 'images/unis/';
      var work_imagePath = 'images/work/';
      var skill_imagePath = 'images/skills/';
      var education = this.props.data.education.map(function(education){
        return <div className="container"> <div className="contentA" key={education.school}><h3>{education.school}</h3>
        <p className="des">{education.degree}</p>
        <p className="des date">{education.graduated}</p>
        <p className = "description">{education.description}</p></div><div className="contentB"><img className="unilogo" src={uni_imagePath + education.logo}></img></div></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div className="container"> <div className="contentA" key={work.company}><h3>{work.company}</h3>
            <p className="des">{work.title}</p>
            <p className="des"><em className="date">{work.years}</em><span> | </span><em className="city">{work.city}</em></p>
            <list className = "description">{work.description.map((item, i) => {
          return <li key={i}>{item}</li>})}</list></div><div className="contentB"><img className="unilogo" src={work_imagePath + work.logo}></img></div></div>
      })
      var skills = this.props.data.skills.map(function(skills){
        return <div> <div key={skills.section}><h3>{skills.section}</h3>
            <div className="wholecontainer">{skills.stack.map((it, i) => {
          return <list className="listing"><li className="li" key={i}>{it.item}</li><img className="lilogo" key={i} src={skill_imagePath + it.logo}></img></list> })}</div></div></div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>

            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>experience</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

				<div>
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;

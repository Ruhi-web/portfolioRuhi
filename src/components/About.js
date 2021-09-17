import React from 'react'
import SkillCard from './SkillCard'

const skills = [
  {
    icon: <i className="fas fa-laptop"></i>,
    title: 'Frontend Development',
    content: 'I can build a beautiful and scalable SPA using HTML, CSS and React.js. Also have experience building wordpress website'
  }, {
    icon: <i className="fas fa-database"></i>,
    title: 'Backend Development',
    content: 'I have good knowledge on nodeJs and have experience working on PHP and SQL'
  }, {
    icon: <i className="fas fa-cogs"></i>,
    title: 'Competitive Coder',
    content: 'can take up challenging tasks, quick to learn and dedicated to complete tasks'
  }, 
  {
    icon: <i className="fal fa-phone-laptop"></i>,
    title: 'Responsive Design',
    content: 'can create responsive design which works efficiently on all screen size including mobile and Tablet'
  },
  {
    icon: <i className="fab fa-wordpress"></i>,
    title: 'WordPress',
    content: 'have experience working in wordpress live websites'
  },
  {
    icon: <i className="fab fa-drupal"></i>,
    title: 'Drupal',
    content: 'have experience working in Drupal websites'
  },
]

const About =() => {
  return (
    <div className="about">
      <div className="about_intro">
        <h6>I am a person who's determined, persistant, a quick learner and loves coding. Passionate to build my career and achieve to become a succesfull web developer.</h6>
      </div>
      <div className="container">
      <div className="about_content_wrap">
      <h2 className="about_heading">What I offer</h2>
      <div className="row about_content">
        {skills.map((skill) => <SkillCard skill={skill}/>)
}
      </div>
      </div>
      </div>
    </div>
  )
}

export default About

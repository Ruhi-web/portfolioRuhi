import React from 'react'
import Girl from '../images/girl.png'
import resume from '../images/RuhiReactWebDev2021.pdf'


const Sidebar = () => {

  return (
    <div className="">
    <div className="port_image">
    <img src={Girl} alt="girl"/>
    </div>
      <div className="sidebar_item sidebar-name">
        <h4>Ruhi Naz</h4>
      </div>
      <div className="sidebar_item sidebar-title">
        <h4>Web Developer</h4>
      </div>
      <a href={resume} download="resume.pdf" target="blank">
        <div className="sidebar_item sidebar_resume">
          <i className="fas fa-file-pdf"></i>
          <span>Download resume</span>
        </div>
      </a>
      <figure className="sidebar_item sidebar-social-icons">
        <a href='https://www.linkedin.com/in/ruhi-naz-09/'>
          <i className="fab fa-linkedin"></i>
        </a>
        <a href='https://github.com/Ruhi-web'>
          <i className="fab fa-github-square"></i>
        </a>
      </figure>
      <div className="contact">
        <div className="sidebar_item sidebar_location">
        <i className="fas fa-map-marker-alt"></i> Dubai, UAE
        </div>
        <div className="sidebar_item">ruhinaz09@gmail.com</div>
        <div className="sidebar_item">+971557972886</div>
      </div>
      <div className="sidebar_item sidebar-email" onClick={()=>window.open("mailto:ruhinaz09@gmail.com")}>email me</div>
    </div>
  )
}

export default Sidebar;
import React from 'react'
import Bar from './Bar'

const languages = [
    {
        icon:'',
        name:'Html',
        level: '80%'
    },
    {
        icon:'',
        name:'CSS',
        level: '80%'
    },
    {
        icon:'',
        name:'JS',
        level:'60%'
    },
    {
        icon:'',
        name:'SQL',
        level:'50%'
   },
    {
        icon:'',
        name:'ReactJS',
        level:'70%'
    },
    {
        icon:'',
        name:'NodeJS',
        level:'40%'
    },
]

const Resume=()=> {
  return (
    <div className="resume">
        <div className="container">
            <div className="row">
                <div className="col-md-6 resume-card">
                    <h4 className="resume-card-heading">Education</h4>
                    <div className="resume-card-body">
                        <h5 className="resume-card-title">Computer Science Engineering</h5>
                        <p className="resume-card-details">Alpha College Of Engineering</p>
                    </div>
                </div>
                <div className="col-md-6 resume-card">
                    <h4 className="resume-card-heading">Experience</h4>
                    <div className="resume-card-body">
                        <h5 className="resume-card-title">AAAGENCY</h5>
                        <p className="resume-card-details">Dubai, UAE</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 resume-lang">
                    <h5>Skills</h5>
                    <div className="resume-lang-body">
                    {
                        languages.map((language)=>
                        <Bar language={language} />
                        )
                    }
                    </div>
                </div>
                
            </div>
        </div>
    </div>

  )

}

export default Resume

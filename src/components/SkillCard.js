import React from 'react'

function SkillCard({
  skill: {
    icon,
    title,
    content
  }
}) {
  return (
    <div className="col-md-6">
      <div className="skill-card">
        <div className="col-3 skill_icon">{icon}</div>
        <div className="skill_content">
          <h6 className="skill_content_title">{title}</h6>
          <p className="skill_content_cont">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard

import React from 'react'

function Bar({language}) {
  const level_width = `${language.level}`;
  console.log(level_width);
  return (

    <div className="bar-content">
      <div className="bar-progress" style={{
          'width': level_width
        }}>
        <h6 className="bar-name">{language.name}</h6>
      </div>
    </div>
  )
}

export default Bar

import React from 'react'
import '../css/Project.css'

const Project = (props) => {

  const renderImg = (src) => {
    let result = []
    if(src != "none") {
      result.push(<iframe
        className="project-src"
        width="280"
        height="180"
        src={src}
        frameBorder="0"
        allowFullscreen="true"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      />)
      return result
    }
  }

  return (
    <div className="project-block">
      {renderImg(props.project.src)}
      <h2 className="project-title">{props.project.title}</h2>
      <p className="project-description">{props.project.description}</p>
    </div>
  )
}

export default Project

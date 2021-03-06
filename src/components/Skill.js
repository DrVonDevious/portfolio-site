import React from 'react'
import '../css/Skill.css'

const stars = (num) => {
  let result = []
  for(let i = 0; i < 5; i++) {
    if(i < num) {
      result.push(<span className="fa fa-star checked" />)
    } else {
      result.push(<span className="fa fa-star" />)
    }
  }
  return result
}

const Skill = (props) => {
  return (
    <div className={`skill-circle ${props.name}`}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <svg className="skill-icon" width="4em" height="4em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
      </svg>
      <p className="skill-tag">{props.title}</p>
      {stars(props.stars)}
    </div>
  )
}

export default Skill

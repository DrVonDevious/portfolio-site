import React from 'react'

import ProfileImage from '../components/ProfileImage.js'
import About from '../components/About.js'
import Skill from '../components/Skill.js'

import '../css/AboutContainer.css'

const AboutContainer = () => {
  return (
    <div className="about-container">
      <ProfileImage className="profile-image"/>
      <About className="about"/>
      <div>
        <Skill name="css" title="CSS" stars={ 4 }/>
        <Skill name="html" title="HTML" stars={ 5 }/>
        <Skill name="javascript" title="JavaScript" stars={ 5 }/>
        <Skill name="react" title="ReactJS" stars={ 4 }/>
        <Skill name="redux" title="ReduxJS" stars={ 3 }/>
        <Skill name="ror" title="Ruby on Rails" stars={ 3 }/>
      </div>
    </div>
  )
}

export default AboutContainer

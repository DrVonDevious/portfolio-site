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
        <Skill name="css"/>
        <Skill name="html"/>
        <Skill name="javascript"/>
        <Skill name="react"/>
        <Skill name="redux"/>
        <Skill name="ror"/>
      </div>
    </div>
  )
}

export default AboutContainer

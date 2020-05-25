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
        <Skill className="skill-1"/>
        <Skill className="skill-2"/>
        <Skill className="skill-3"/>
        <Skill className="skill-4"/>
        <Skill className="skill-5"/>
        <Skill className="skill-6"/>
      </div>
    </div>
  )
}

export default AboutContainer

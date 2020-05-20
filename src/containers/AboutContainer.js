import React from 'react'

import ProfileImage from '../components/ProfileImage.js'
import About from '../components/About.js'
import Skill from '../components/Skill.js'

const AboutContainer = () => {
  return (
    <div>
      <ProfileImage />
      <About />
      <div>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  )
}

export default AboutContainer

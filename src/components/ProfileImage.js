import React from 'react'
import '../css/ProfileImage.css'

const ProfileImage = () => {
  return (
    <div className="image-container">
      <img className="profile-image" src={process.env.PUBLIC_URL + '/profile-image.jpg'} alt="Profile Image" />
    </div>
  )
}

export default ProfileImage

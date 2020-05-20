import React, { useEffect } from 'react'
import '../css/Navbar.css'

const Navbar = () => {

  useEffect(() => {
    var nav = document.querySelector(".nav-bar")
    var sticky = nav.offsetTop

    window.onscroll = () => {
      if(window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
      } else {
        nav.classList.remove("sticky")
      }
    }
  })

  return (
    <div className="nav-bar">
      <a className="nav-link">Home</a>
      <a className="nav-link">About</a>
      <a className="nav-link">Work</a>
      <a className="nav-link">Blog</a>
      <a className="nav-link">Contact</a>
    </div>
  )
}

export default Navbar

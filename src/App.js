import React from 'react';

import Navbar from './containers/Navbar.js'
import HeaderContainer from './containers/HeaderContainer.js'
import AboutContainer from './containers/AboutContainer.js'
import ProjectsContainer from './containers/ProjectsContainer.js'
import BlogsContainer from './containers/BlogsContainer.js'
import ContactContainer from './containers/ContactContainer.js'

function App() {
  return (
    <div>
      <Navbar />
      <HeaderContainer />
      <AboutContainer />
      <ProjectsContainer />
      <BlogsContainer />
      <ContactContainer />
    </div>
  );
}

export default App;

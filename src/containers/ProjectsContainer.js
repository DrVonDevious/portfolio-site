import React from 'react'
import Project from '../components/Project'
import '../css/ProjectContainer.css'

const ProjectsContainer = () => {

  const projects = {
    quicksilver: {
      title: "QuickSilver",
      src: "https://www.youtube.com/embed/qt8UziBh2cY",
      description: "This is a test."
    },
    mindsmith: {
      title: "MindSmith",
      src: "https://www.youtube.com/embed/Fc5ua58HTag",
      description: "This is a test."
    },
    vsm: {
      title: "Virus Spread Model",
      src: "none",
      description: "This is a test."
    },
    pulsar: {
      title: "Pulsar",
      src: "none",
      description: "This is a test."
    },
    pokemon_cli: {
      title: "PokemonCLI",
      src: "https://www.youtube.com/embed/-bgkli4to2Q",
      decription: "This is a test."
    },
    xidle: {
      title: "xIdle",
      src: "none",
      description: "This is a test."
    }
  }

  const renderProjects = () => {
    let result = []
    for(const p in projects) {
      const obj = projects[p]
      result.push(<Project project={obj}/>)
    }
    return result
  }

  return (
    <div className="project-container">
      {renderProjects()}
    </div>
  )
}

export default ProjectsContainer

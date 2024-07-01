import Loader from 'react-loaders'
import Sidebar from '../Sidebar'
import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [filterProjects, setFilterProjects] = useState([])
  const allProjects = [
    {
      id: 1,
      title: 'Hotel booking system',
      category: 'css',
      img: (
        <a href="https://github.com/neerajverma111" target="_blank">
          <button>project</button>
        </a>
      ),
    },
    {
      id: 2,
      title: 'Car rental',
      category: 'js',
      img: (
        <a href="https://github.com/neerajverma111" target="_blank">
          <button>project</button>
        </a>
      ),
    },
    {
      id: 3,
      title: 'Block chain Website',
      category: 'js',
      img: (
        <a href="https://github.com/neerajverma111" target="_blank">
          <button>project</button>
        </a>
      ),
    },
    {
      id: 4,
      title: 'market explorer',
      category: 'html',
      img: (
        <a href="https://github.com/neerajverma111" target="_blank">
          <button>project</button>
        </a>
      ),
    },
    {
      id: 5,
      title: 'Self Driving Car',
      category: 'css',
      img: (
        <a href="https://github.com/neerajverma111" target="_blank">
          <button>project</button>
        </a>
      ),
    },
    {
      id: 6,
      title: 'Food ordering',
      category: 'html',
      img: (
        <a href="https://github.com/neerajverma111" target="_blank">
          <button>project</button>
        </a>
      ),
    },
  ]

  const filterProject = (type) => {
    if (type) {
      let fp = allProjects.filter((item) => item.category === type)
      setFilterProjects(fp)
    } else {
      setFilterProjects(allProjects)
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    setFilterProjects(allProjects)
  }, [])

  return (
    <>
      <div className="App">
        <Sidebar />
        <div className="container projects-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[
                  'M',
                  'y',
                  ' ',
                  'P',
                  'r',
                  'o',
                  'j',
                  'e',
                  'c',
                  't',
                  's',
                ]}
                idx={15}
              />
            </h1>
            <ul>
              <li>
                <span className="flat-button" onClick={() => filterProject('')}>
                  All PROJECTS
                </span>
              </li>
              <li>
                <span
                  className="flat-button"
                  onClick={() => filterProject('html')}
                >
                  HTML PROJECTS
                </span>
              </li>
              <li>
                <span
                  className="flat-button"
                  onClick={() => filterProject('css')}
                >
                  CSS PROJECTS
                </span>
              </li>
              <li>
                <span
                  className="flat-button"
                  onClick={() => filterProject('js')}
                >
                  JAVASCRIPT PROJECTS
                </span>
              </li>
            </ul>
            {/* <div>
            
        </div> */}
            <div className="apex">
              {filterProjects.map((value, index) => (
                <div key={index} className="flat-button">
                  <h2>{value.title}</h2>
                  <div>{value.img}</div>
                </div>
              ))}
            </div>
          </div>
          <Loader type="pacman" />
        </div>
      </div>
    </>
  )
}
export default Projects

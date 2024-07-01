import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Sidebar from '../Sidebar'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="App">
        <Sidebar />
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['S', 'k', 'i', 'l', 'l', 's']}
                idx={15}
              />
            </h1>
            <p>
              As a positive and driven individual with a passion for Web
              technologies, I not only possess a diverse skill set but also have
              a proven ability to adapt to new roles and technologies.
              <br />
            </p>
            <p>
              <b>• Programming Languages: </b> Proficient in HTML5, CSS, SASS,
              JAVA, JAVASCRIPT, Python, C, and C++
              <br />
              <b>• Data Structures and Algorithms: </b>Strong command of Java
              Programming.
              <br />
              <b>• Frameworks:</b> Skilled in Bootstrap, ExpressJS, ReactJS,
              NodeJS.
              <br />
              <b>• Database:</b> Experienced with MongoDB and MySQL.
              <br />
              <b> • Tools:</b> Proficient in Visual Studio Code, IntelliJ and
              Eclipse
              <br />
            </p>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
            </div>
          </div>
        </div>
        <Loader type="pacman" />
      </div>
    </>
  )
}

export default Skills

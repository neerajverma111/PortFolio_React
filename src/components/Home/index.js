import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import Sidebar from '../Sidebar'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['e', 'e', 'r', 'a', 'j']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    // useEffect hook is used to schedule a function (the one inside setTimeout) to be executed after 4000 milliseconds (4 seconds).
    return () => clearTimeout(timeoutId);
  
  }, []);
  // above [] is the dependancy array that ensures the effect will run only after the initial render.

  return (
    <>
    <div className="App">
      <Sidebar />
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {/* {_12 means that letter has a delay of 1.2sec} */}
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer / JavaScript Expert / Java Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}
export default Home

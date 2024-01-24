import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import Sidebar from '../Sidebar'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { ErrorMessage } from '@hookform/error-message'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const refForm = useRef()
  const [formVals, setFormVals] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

  // const onSubmit = (data) => console.log(data)

  // console.log(watch('example'))

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const changeValue = ({ target }) => {
    const formVal = formVals
    formVal[target.name] = target.value
    setFormVals(formVal)
  }

  const sendEmail = (e) => {
    let flag = false
    Object.entries(formVals).forEach((value) => {
      console.log(value)
      if (value[1] === '') {
        setError(value[0], {
          type: 'custom',
          message: 'This Field is required!',
        })
        flag = true
      }
    })

    if (flag) {
      e.preventDefault() //prevent default behaviour
      return false
    }
    e.preventDefault() //prevent default behaviour

    emailjs
      .sendForm(
        'service_9c7n3mr',
        'template_emk3zf9',
        e.target,
        '0Iwz5AG01l70_cBg3'
      )
      .then(
        () => {
          alert('Message sent successfully!')
          window.location.reload(false)
        },
        () => {
          alert('Failer to send the message, Please try again!')
        }
      )
  }

  return (
    <>
      <div className="App">
        <Sidebar />
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I am interested in freelance opportunities - especially ambitious
              or large projects. However, if you have other request or question,
              don't hesitate to contact me using below form either.
            </p>
            <div>
              <form onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      {...register('name', { required: 'this is required' })}
                      onBlur={changeValue}
                    />
                  </li>
                  <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ message }) => <p>{message}</p>}
                  />
                  <li className="half">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      {...register('email', { required: 'this is required' })}
                      onBlur={changeValue}
                    />
                  </li>
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <p>{message}</p>}
                  />
                  <li>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      {...register('subject', { required: 'this is required' })}
                      onBlur={changeValue}
                    />
                  </li>
                  <ErrorMessage
                    errors={errors}
                    name="subject"
                    render={({ message }) => <p>{message}</p>}
                  />
                  <li>
                    <textarea
                      name="message"
                      placeholder="Message"
                      {...register('message', { required: 'this is required' })}
                      onBlur={changeValue}
                    />
                  </li>
                  <ErrorMessage
                    errors={errors}
                    name="message"
                    render={({ message }) => <p>{message}</p>}
                  />
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
        <Loader type="pacman" />
      </div>
    </>
  )
}

export default Contact

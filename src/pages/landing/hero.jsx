import { useEffect, useState } from 'react'
import './hero.css'
import heroimg from '../../assets/hero.jpg'

const words = ['ENTERPRISE PLATFORMS', 'DATA', 'INTEGRATION', 'AI SOLUTIONS']

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const typingSpeed = isDeleting ? 40 : 100

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentText.slice(0, -1))
      } else {
        setCurrentText(currentWord.slice(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000)
      }

      if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setWordIndex((wordIndex + 1) % words.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, wordIndex])

  return (
    <section className="hero-section relative w-full h-screen flex items-center">
      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-16">
        <div className="max-w-2xl text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Driving Excellence, Delivering Value,<br />
            One solution at a time
          </h1>
  
          <div className=" md:text-3xl font-bold text-white h-10">
            <span className='text-4xl '>{currentText}</span>
            <span className="blinking-cursor">_</span>
          </div>
        </div>
      </div>
    </section>

  
)
}

export default Hero

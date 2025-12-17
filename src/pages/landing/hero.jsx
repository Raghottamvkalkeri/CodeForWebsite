import { useEffect, useState } from 'react'
// import './hero.css'
import dots from '../../assets/homepageimage.png'

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
    // <section className="hero-sections hero-bg relative w-full h-screen flex items-center">
    //   {/* Content */}
    //   <div className="relative z-10 w-full px-6 lg:px-16">
    //     <div className="max-w-2xl text-left">
    //       <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight inter-text">
    //         Driving Excellence, Delivering Value,<br />
    //         One solution at a time
    //       </h1>

    //       {/* <div className=" md:text-3xl font-bold text-white h-10">
    //         <span className='text-4xl inter-text'>{currentText}</span>
    //         <span className="blinking-cursor">_</span>
    //       </div> */}
    //     </div>
    //   </div>
    // </section>


    // <section className="bg-gray-50 py-16 px-6 md:px-80 mt-10">
    //   <div className="max-w-7xls mx-auto grid md:grid-cols-[60%_40%] gap-12 items-center">
    //     {/* Left Text */}
    //     <div>
    //       <h1 className="ft-header !text-blacks">
    //         Driving Excellence, Delivering Value, <br />
    //         One solution at a time
    //       </h1>
    //     </div>

    //     {/* Right Image */}
    //     <div className="flex justify-center lg:justify-end">
    //       <img
    //         src={dots}
    //         alt="Aveto Dots"
    //         className="rounded-2xls shadow-lgs w-fulls max-w-md object-covers w-60"
    //       />
    //     </div>
    //   </div>
    // </section>//bg-white py-16 px-6 md:px-20 lg:px-20 xl:px-40 2xl:px-40

  <section className="min-h-screen flex items-center bg-white py-16 px-6 md:px-20 lg:px-20 xl:px-40 2xl:px-40">
  

  <div className="w-full min-h-screen container mx-auto grid md:grid-cols-[70%_30%] gap-15 items-center py-12">

  
  <div className="flex flex-col justify-center ft-header">
    <h1 className="header mb-12 leading-[1.25] text-[42px] md:text-[54px] lg:text-[62px]">
      Experts in Enterprise Platforms. <br /> 
      Driving real outcomes through <br /> dependable delivery.
    </h1>

    <h1 className="ft-header !text-blacks text-[40px] md:text-[50px] lg:text-[56px] mt-10">
      We are AVETO
    </h1>

    <h5 className="s-header text-[30px] md:text-[36px] lg:text-[40px] mt-4">
      Built to Solve
    </h5>
  </div>

  
  <div className="flex justify-end items-center h-full">
    <img
      src={dots}
      alt="Aveto Dots"
      className="rounded-2xls shadow-lgs  object-cover w-auto max-w-fit h-full"
       classNames="rounded-2xls shadow-lgs w-fulls max-w-md object-covers w-60"
    />
  </div>

</div>

</section>

  )
}

export default Hero

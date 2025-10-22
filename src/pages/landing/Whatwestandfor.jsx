import React from 'react'

const whatwestandfor = [{
  title: (
    <span className="text-[24px]">Impact is in the basics. </span>
  ),
  header: (
    <>
      <p>Speed. Quality. Cost. Flexibility. Transparency.</p>  <p>These aren't promises, they're the way we work.Our differentiation is consistency. Every interaction. Every project. Every outcome.</p>    <p className="font-semibold hidden"></p>
      {/* <p>we design technology that adapts, scales, and creates lasting impact.</p> */}
    </>
  )
}
]

const Whatwestandfor = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 lg:px-80 xl:px-80 2xl:px-80">
      <div className="container mx-auto px-4s"> 
        <h2 className="page-subheader">
          What we stand for
        </h2>

        <div className="text-left mt-10 mb-10">
          <h3 className="page-paragraph !font-bold">
            {whatwestandfor[0].title}
          </h3>

          <p className='page-paragraph !text-[24px]'>{whatwestandfor[0].header}</p>

        </div>
      </div>
    </section>
  )
}

export default Whatwestandfor
import React from 'react'
import pic1 from '../Assets/WebDevelopmentProjects2.png'
import pic2 from '../Assets/download dgm.jpeg'
import pic3 from '../Assets/static-web-design1.jpg'
const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="Port">
  <div className="title">
    <h2>Portfolio</h2>
  </div>
  <div className="Cards">
    <h3>Here Are Some Of My Projects</h3>
    <div className="Portfolio-Wrapper">
      {[pic1,pic2,pic3].map((item,index)=>(
              <div key={index} className="Card">
              <a href="#">
                <img src={item} alt="Web Development Projects" />
              </a>
            </div>
      ))}

    </div>
  </div>
</section>

    </>
  )
}

export default Portfolio

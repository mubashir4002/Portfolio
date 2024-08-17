import React from 'react'
import { SERVICES } from '../constants'

const Service = () => {
  return (
    <>
<section id="service" className="Services">
  <div className="Title">
    <h2>Our Services</h2>
  </div>


  <div className="Service-Wrapper">
    {SERVICES.map((item,index)=>(
      <div key={index} className="card">
      <h5>{item.title}</h5>
      <div className="para">
        <p>{item.description}</p>
        <p style={{ textAlign: 'center' }}>
          <a className="button" href="#">Read More</a>
        </p>
      </div>
    </div>
    ))}
  </div>
</section>

    </>
  )
}

export default Service

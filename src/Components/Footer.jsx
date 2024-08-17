import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
    <p>Mubashir Sohail</p>
    <div className="opt">
    <p>You Can Also Follow Me On Social Media</p>
   </div>
    <div className="SM">
    <a href="https://www.facebook.com/mubashir.sohail.1420/" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-facebook' style={{ color: '#e01f1f' }}></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-instagram' style={{ color: '#e01f1f' }}></i>
            </a>
            <a href="mailto:rajb12618@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-linkedin' style={{ color: '#e01f1f' }}></i>
            </a>
    </div>
  <div className="ending">
    <p className="end">&copy; 2024 Mubashir Sohail. All Rights Reserved.</p>
  </div>
    
</footer>
    </>
  )
}

export default Footer

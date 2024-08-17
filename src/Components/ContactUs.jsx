import React from 'react'

const Contact = () => {
  return (
    <>
      <section id="contact" className="Contact">
    <div className="content">
        <h2>Contact Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa placeat architecto alias corporis possimus eos unde commodi, voluptas natus fugit ullam maiores illum obcaecati nostrum ea optio vero minus!</p>
    </div>
    <div className="cont">
        <div className="c-info">
            <div className="packet">
                <div className="icon">
                    <a href="#"><i className='bx bx-map' style={{ color: '#f7f2f2' }}></i></a>
                </div>
                <div className="c-text">
                    <h3>Address</h3>
                    <p>4671 Sugar Camp Road, <br />Qwatonna, Minnesota,<br />55060</p>
                </div>
            </div>

            <div className="packet">
                <div className="icon">
                    <a href="#"><i className='bx bx-phone' style={{ color: '#f0efef' }}></i></a>
                </div>
                <div className="c-text">
                    <h3>Phone</h3>
                    <p>+92 332-095160-9</p>
                </div>
            </div>

            <div className="packet">
                <div className="icon">
                    <a href="#"><i className='bx bx-envelope' style={{ color: 'hsl(0, 45%, 94%)' }}></i></a>
                </div>
                <div className="c-text">
                    <h3>Email</h3>
                    <p>rajb12618@gmail.com</p>
                </div>
            </div>
        </div>


        
        <div className="contactform">
            <form>
                <h2>Send Message</h2>
                <div className="ibox">
                    <input type="text" required />
                    <span>Full Name</span>
                </div>

                <div className="ibox">
                    <input type="email" required />
                    <span>Email</span>
                </div>

                <div className="ibox">
                    <textarea name="message" required></textarea>
                    <span>Type Your Message...</span>
                </div>

                <div className="ibox">
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>
    </div>
</section>
    </>
  )
}

export default Contact

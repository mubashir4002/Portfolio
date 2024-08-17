import { useState } from 'react';
import logo from '../Assets/Black and White Circle Business Logo (Website) (2).png';

const Navbar = () => {
  const [open, isOpen] = useState(false);

  const toggle = () => {
    isOpen(!open);
  };

  return (
    <nav className='Navbar-Wrapper'>
      <div className='navbar'>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        
        <div className="tabs">
          {['Home', 'About', 'Service', 'Portfolio', 'Contact'].map((item, index) => (
            <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`} key={index}>
              {item}
            </a>
          ))}
        </div>
        
        <div onClick={toggle} className='toggle'>{open ? "X" : "Menu"}</div>
      </div>

      {open && (
        <div className='small-Menu'>
          {['Home', 'About', 'Services', 'Portfolio', 'Contact Us'].map((item, index) => (
            <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`} key={index}>
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

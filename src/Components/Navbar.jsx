import { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to={`/${item.toLowerCase().replace(/\s+/g, '')}`} key={index}>
              {item}
            </Link>
          ))}
        </div>
        
        <div onClick={toggle} className='toggle'>{open ? "X" : "Menu"}</div>
      </div>

      {open && (
        <div className='small-Menu'>
          {['Home', 'About', 'Service', 'Portfolio', 'Contact'].map((item, index) => (
            <Link to={`/${item.toLowerCase().replace(/\s+/g, '')}`} key={index} >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

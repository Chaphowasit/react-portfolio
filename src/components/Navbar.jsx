import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faMedium } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  return (
    <nav className="bg-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left section with app name and links */}
        <div className="flex-1 text-center">
          <ul className="flex justify-center space-x-8 text-black text-3xl">
            <li>
              <Link to="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">About</Link>
            </li>
            <li>
              <Link to="/project" className="hover:text-gray-400">Project</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            </li>
          </ul>
        </div>
        
        {/* Right section with social media icons */}
        <div className="flex items-center space-x-6 text-black text-2xl">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.medium.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

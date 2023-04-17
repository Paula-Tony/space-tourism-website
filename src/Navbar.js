import logo from './imgs/logo.svg';
import iconMenu from './imgs/icon-hamburger.svg';
import iconClose from './imgs/icon-close.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  function handleMenu() {
    return document.querySelector('.links').classList.add('open');
  }
  function handleClose() {
    return document.querySelector('.links').classList.remove('open');
  }
  function handleActiveTab(e) {
    document
      .querySelectorAll('.links .link')
      .forEach((link) => link.classList.remove('active'));
    return e.target.classList.add('active');
  }
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <img
        src={iconMenu}
        alt="menu icon"
        className="icon-menu"
        onClick={handleMenu}
      />
      <ul className="links" onClick={handleActiveTab}>
        <img
          src={iconClose}
          alt="close icon"
          className="icon-close"
          onClick={handleClose}
        />
        <Link to="/">
          <li className="link active">
            <span className="tab-num">00</span>home
          </li>
        </Link>
        <Link to="/destination">
          <li className="link">
            <span className="tab-num">01</span>destination
          </li>
        </Link>
        <Link to="/crew">
          <li className="link">
            <span className="tab-num">02</span>crew
          </li>
        </Link>
        <Link to="/technology">
          <li className="link">
            <span className="tab-num">03</span>technology
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;

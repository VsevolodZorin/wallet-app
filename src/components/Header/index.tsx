import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper content">
        <Link to={'/'}>home</Link>
      </div>
    </header>
  );
};

export default Header;

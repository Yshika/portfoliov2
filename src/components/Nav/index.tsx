import { useCallback } from 'react';
import menuIcon from '../../assets/hamburger.png';
import data from '../../data.json';
import { navArray } from '../../constants';
import './style.scss';

const Nav: React.FC = () => {
  const handleTitleClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav className='nav'>
      <a className='nav-title' onClick={handleTitleClick}>
        {data?.name}
      </a>

      <ul className='nav-list'>
        {navArray?.map((item, index) => (
          <li key={index}>
            <a className='nav-link' href={item?.id}>
              {item?.name}
            </a>
          </li>
        ))}
      </ul>

      <div className='nav-menu'>
        <img src={menuIcon} alt='menu' />
      </div>
    </nav>
  );
};
export default Nav;

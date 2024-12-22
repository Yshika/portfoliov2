import { useCallback } from 'react';
import menuIcon from '../../assets/hamburger.png';
import data from '../../data.json';
import './style.scss';

const Nav: React.FC = () => {
  const handleTitleClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav className='nav'>
      <a className='nav_title' onClick={handleTitleClick}>
        {data.name}
      </a>

      <ul className='nav_list'>
        {data.nav.map((item, index) => (
          <li key={index}>
            <a href={item?.key} rel='noreferrer'>
              {item?.name}
            </a>
          </li>
        ))}
      </ul>

      <div className='nav_menu'>
        <img src={menuIcon} alt='menu' />
      </div>
    </nav>
  );
};
export default Nav;

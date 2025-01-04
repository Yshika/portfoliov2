import menuIcon from '../../assets/hamburger.png';
import data from '../../data.json';
import { navArray } from '../../constants';
import './style.scss';

const Nav: React.FC = () => {
  return (
    <nav className='nav'>
      <a className='nav-title' href='#'>
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

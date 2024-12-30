import { navArray } from '../../constants';
import data from '../../data.json';
import './style.scss';

const Footer = () => {
  return (
    <div className='nav-container'>
      <ul className='nav-list'>
        {navArray?.map((item, index) => (
          <li key={index}>
            <a className='nav-link' href={item?.id}>
              {item?.name}
            </a>
          </li>
        ))}
      </ul>
      <p>{data?.disclaimer}</p>
    </div>
  );
};

export default Footer;

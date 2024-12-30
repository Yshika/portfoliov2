import data from '../../data.json';
import './style.scss';

const Summary: React.FC = () => {
  return (
    <section className='summary'>
      <div className='profile-pic'>
        <img src='/portfoliov2/profile_pic.jpg' alt='profilePic' />
      </div>
      <div className='info'>
        <h3 className='greeting'>Hello I'm</h3>
        <h1 className='name'>{data?.name}</h1>
        <h1 className='job'>{data?.job}</h1>

        <div className='cta-container'>
          <button>Download CV</button>
          <button aria-description='dark'>Contact Info</button>
        </div>

        <div className='social-links'>
          <a
            className='icon'
            href={data?.linkedIn}
            target='_blank'
            rel='noreferrer'>
            <img src='/portfoliov2/linkedin.png' alt='linkedin' />
          </a>

          <a
            className='icon'
            href={data?.github}
            target='_blank'
            rel='noreferrer'>
            <img src='/portfoliov2/github.png' alt='github' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Summary;

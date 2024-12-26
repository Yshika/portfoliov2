import './style.scss';
import data from '../../data.json';

const About: React.FC = () => {
  return (
    <section id='about' className='about'>
      <div className='heading-container'>
        <h3 className='know-more'>Get To Know More</h3>
        <h1 className='heading'>About Me</h1>
      </div>

      <div className='about-content'>
        <div className='about-pic'>
          <img className='pic' src='/profile_pic.jpg' alt='profile' />
        </div>

        <div className='about-overview'>
          <div className='about-box'>
            <div className='box'>
              <div className='icon'>
                <img src='/experience.png' alt='exp' />
              </div>
              <h3 className='title'>Experience</h3>
              <p className='exp'>{data?.about?.years} years</p>
              <p className='exp'>{data?.about?.field}</p>
            </div>

            <div className='box'>
              <div className='icon'>
                <img src='/education.png' alt='education' />
              </div>
              <h3 className='title'>Education</h3>
              <p className='exp'>{data?.about?.undergrad}</p>
              <p className='exp'>{data?.about?.postGrad}</p>
            </div>
          </div>

          <p>{data?.about?.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

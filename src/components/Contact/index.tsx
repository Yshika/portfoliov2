import HeadSection from '../common/HeadSection';
import './style.scss';
import data from '../../data.json';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <HeadSection preHeading='Get In Touch' heading='Contact Me' />
      <div className='box'>
        <div className='contact-box'>
          <div className='img-box'>
            <img src='email.png' alt='email' />
          </div>
          <p>{data?.email}</p>
        </div>
        <div className='contact-box'>
          <div className='img-box'>
            <img src='email.png' alt='email' />
          </div>
          <p>LinkedIn</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

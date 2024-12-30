import HeadSection from '../common/HeadSection';
import './style.scss';
import data from '../../data.json';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <HeadSection preHeading='Get In Touch' heading='Contact Me' />
      <div className='box'>
        <a
          href={`mailto:${
            data?.email
          }?subject=${'Hi Lets Connect!'}&body=Hello`}
          className='contact-box'>
          <div className='img-box'>
            <img src='email.png' alt='email' />
          </div>
          <p>{data?.email}</p>
        </a>
        <a href={data?.linkedIn} target='_blank' className='contact-box'>
          <div className='img-box'>
            <img src='email.png' alt='email' />
          </div>
          <p>LinkedIn</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;

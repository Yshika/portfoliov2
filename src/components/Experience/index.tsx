import HeadSection from '../common/HeadSection';
import './style.scss';
import data from '../../data.json';

const Experience = () => {
  return (
    <section id='experience' className='experience'>
      <HeadSection preHeading='Explore My' heading='Experience' />
      <div className='box-container'>
        {data?.experience?.map(
          (
            exp: {
              heading: string;
              skills: { [key: string]: string | undefined };
            },
            index: number
          ) => (
            <div className='box' key={index}>
              <h1 className='sub-heading'>{exp?.heading}</h1>
              <div className='skills-container'>
                {Object.keys(exp?.skills)?.map((skill, index) => (
                  <div className='skills' key={index}>
                    <div className='checkmark'>
                      <img src='/checkmark.png' alt='check' />
                    </div>
                    <div>
                      <h3>{skill}</h3>
                      <p>{exp?.skills?.[skill]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Experience;

import HeadSection from '../common/HeadSection';
import './style.scss';
import data from '../../data.json';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <HeadSection preHeading='Browse My Recent' heading='Projects' />
      <div className='box-container'>
        {data?.projects?.map((project, index) => {
          return (
            <div className='box' key={index}>
              <div className='img-box'>
                <img src={project?.img} alt={project?.title} />
              </div>
              <h1>{project?.title}</h1>
              <div className='btn-container'>
                <button
                  onClick={e => {
                    e.preventDefault();
                    window.open(project?.gitLink, '_blank');
                  }}
                  className='btn'>
                  Github
                </button>
                <button
                  onClick={e => {
                    e.preventDefault();
                    window.open(project?.liveLink, '_blank');
                  }}
                  className='btn'>
                  Live Demo
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

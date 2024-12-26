import './style.scss';

const HeadSection = ({
  preHeading,
  heading,
}: {
  preHeading: string;
  heading: string;
}): JSX.Element => {
  return (
    <div className='heading-container'>
      <h3 className='know-more'>{preHeading}</h3>
      <h1 className='heading'>{heading}</h1>
    </div>
  );
};

export default HeadSection;

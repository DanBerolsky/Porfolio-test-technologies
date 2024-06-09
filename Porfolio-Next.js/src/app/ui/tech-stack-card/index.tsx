import './index.css';

const TechStack = (prop: { techData: string[] }) => {
  return (
    <div className='tech-card card'>
      <h5 className='tech-card__title'>Tech stack</h5>
      <div className='tech-card__items'>
        {prop.techData.map((techName, i) => (
          <div key={i}>{techName}</div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
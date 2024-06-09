import './index.css';
import { EducationData } from '@/app/lib/definitions';

const Education = (props: { educationData: EducationData[] }) => {
  return (
    <div className='education-card card'>
      <h5 className='education-card__title'>Education</h5>
      {props.educationData.map((item: EducationData, index: number) => (
        <div key={index} className='education-card__body'>
          <div></div>
          <span>{item.date}</span>
          <h5>{item.institution}</h5>
          <span>{item.degree}</span>
        </div>
      ))}
    </div>
  );
};

export default Education;

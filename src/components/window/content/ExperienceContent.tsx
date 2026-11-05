import { experiences } from '../../../content';

interface IExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceContent = () => (
  <ol className="timeline">
    {experiences.map((item: IExperienceItem) => (
      <li key={item.duration}>
        <h3>{item.role}</h3>
        <p>{item.company}</p>
        <p className="timeline-when">{item.duration}</p>
        <p>{item.description}</p>
      </li>
    ))}
  </ol>
);

export default ExperienceContent;

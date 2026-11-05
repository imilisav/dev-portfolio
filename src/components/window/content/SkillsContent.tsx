import { skills } from '../../../content';

const SkillsContent = () => (
  <ul className="skill-chips">
    {skills.map((skill) => (
      <li>{skill}</li>
    ))}
  </ul>
);

export default SkillsContent;

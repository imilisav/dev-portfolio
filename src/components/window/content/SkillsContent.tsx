import { skills } from "../../../content";

const SkillSection = ({ items }) => (
  <div>
    {items.map((item, key) => <li key={key}>{item}</li>)}
  </div>
);

const SkillsContent = () => (
    <ul className="skill-chips">
      {skills.map((skillType) => <SkillSection items={skillType.items} />)}
    </ul>
  )

export default SkillsContent;
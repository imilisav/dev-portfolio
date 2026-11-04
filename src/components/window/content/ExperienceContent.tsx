import { experience } from "../../../content";

const ExperienceContent = () => (
    <ol className="timeline">
      {experience.map((item) => (
        <li key={item.when}>
          <p className="timeline-when">{item.when}</p>
          <h3>{item.role}</h3>
          <p>{item.place}</p>
        </li>
      ))}
    </ol>
  )

export default ExperienceContent;
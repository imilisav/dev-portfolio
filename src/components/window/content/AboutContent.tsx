import { about } from '../../../content';

const AboutContent = () => (
    <div className="window-copy">
      <p className="eyebrow">Hello! 👋</p>
      <h3>About Me</h3>
      <p>{about.text}</p>
    </div>
  )

export default AboutContent;
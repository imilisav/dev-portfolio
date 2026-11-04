import AboutContent from './content/AboutContent';
import ProjectsContent from './content/ProjectsContent';
import ExperienceContent from './content/ExperienceContent';
import SkillsContent from './content/SkillsContent';
import { type FolderId } from '../../content';

interface IContentRendererProps {
    id: FolderId,
};

const ContentRenderer = ({ id }: IContentRendererProps) => {
  switch (id) {
    case 'about':
      return <AboutContent/>;
    case 'projects':
      return <ProjectsContent />;
    case 'experience':
      return <ExperienceContent />;
    case 'skills':
      return <SkillsContent />;
    default:
      return null;
  }
};

export default ContentRenderer;
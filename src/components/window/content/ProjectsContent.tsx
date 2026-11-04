import { projects } from "../../../content";

const ProjectsContent = () => (
    <ul className="file-grid">
      work in progress 🚧
      {projects.map(
        (project, key) => (
          <li key={key} className="file-card">
            <span className="file-preview" />
            <span className="file-label">{project}</span>
          </li>
        ),
      )}
    </ul>
  )

export default ProjectsContent
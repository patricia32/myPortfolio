import { ProjectCard } from '../ProjectCard';

import type { Project } from '../../types/Project';
import './ProjectsRow.scss';

interface ProjectsRowProps {
  category: string;
  projects: Project[];
}
export const ProjectsRow = ({ category, projects }: ProjectsRowProps) => {
  return (
    <div className="row">
      <div className="row-title">{category}</div>
      <div className="row__grid">
        {projects.map(({ id, title, content, tags, image, github_link }) => (
          <ProjectCard
            key={id}
            title={title}
            content={content}
            tags={tags}
            image={image}
            github_link={github_link}
          />
        ))}
      </div>
    </div>
  );
};

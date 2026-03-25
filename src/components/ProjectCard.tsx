import './ProjectCard.scss';

interface ProjectCardProps {
  title: string;
  content: string;
  tags: string[];
  image: string;
  github_link: string;
}

export const ProjectCard = ({ title, tags, image, github_link }: ProjectCardProps) => {
  return (
    <a href={github_link} className="card" title="Take a look on GitHub">
      <h3 className="card-title">{title}</h3>
      <div className="card__info">
        <div className="card__info__tags">
          {tags.map((tag) => (
            <div key={tag} className="card__info__tags-item">
              {tag}
            </div>
          ))}
        </div>
        <img className="card__info-image" src={image} alt={title} />
      </div>
    </a>
  );
};

import './ProfessionalBackground.scss';

export const ProfessionalBackground = () => {
  const card = (title: string, period: string, details: string, tags: string[] = []) => {
    return (
      <div className="backgroundCard">
        <div className="backgroundCard-title">{title}</div>
        <div className="backgroundCard-details">{details}</div>
        <div className="backgroundCard-period">{period}</div>
        <div className="backgroundCard__tags">
          {tags.map((tag) => (
            <div key={tag} className="backgroundCard__tags-item">
              {tag}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="background">
      <div className="background-title">Professional Background</div>

      <div className="background__cards">
        {card('Endava', 'July 2025 - Present', 'Frontend Developer', [
          'React',
          'TypeScript',
          'JavaScript',
          'CSS',
          'Tailwind',
        ])}

        {card('Robert BOSCH', 'July 2023 - October 2023', 'Internship', [
          'Arduino',
          'C',
          'Embedded Systems',
        ])}

        {card('UTCN', 'October 2020 - July 2024', 'Computer Science', [
          'React',
          'JavaScript',
          'Java',
          'C',
          'Arduino',
          'Machine Learning',
          'Deep Learning',
        ])}
      </div>
    </div>
  );
};

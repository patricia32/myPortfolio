import { Header } from './Header';
import { ProfessionalBackground } from './professionalBackground/ProfessionalBackground';
import { Profile } from './Profile';
import { ProjectsList } from './ProjectsList';
import './Hero.scss';

export const Hero = () => {
  return (
    <div className="hero">
      <Profile />
      <Header />
      <ProfessionalBackground/>
      <ProjectsList />
    </div>
  );
};

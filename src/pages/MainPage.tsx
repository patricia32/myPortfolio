import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';

import './MainPage.scss';

export const MainPage = () => {
  return (
    <div className="main">
      <Hero />
      <Footer />
    </div>
  );
};

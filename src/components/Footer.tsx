import './Footer.scss';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="footer">
      <div>Designed & Built by Patricia Teocan</div>
      <div>© 2026 Patricia Teocan</div>
      <div className="footer__links">
        <div className="footer__links-icon">
          <a href="https://github.com/patricia32">
            <FaGithub />
          </a>
        </div>
        <div className="footer__links-icon">
          <a href="https://www.linkedin.com/in/patricia-teocan-1a7613263/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

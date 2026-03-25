import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__item">
        <div className="header__item-number">&lt;1</div>
        <div className="header__item-text">Year Experience</div>
      </div>
      <div className="header__item">
        <div className="header__item-number">UTCN</div>
        <div className="header__item-text">Computer Science</div>
      </div>
      <div className="header__item">
        <div className="header__item-number">React</div>
        <div className="header__item-text">Main Stack</div>
      </div>
    </div>
  );
};

import "./header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <img className="ai-planet-logo" alt="" src="/ai-planet-logo.svg" />
      <div className="menu-item">
        <img className="person-icon" alt="" src="/person.svg" />
        <img className="arrow-drop-down-icon" alt="" src="/arrowdropdown.svg" />
      </div>
      <div className="menu">
        <div className="menu-item1">
          <div className="learn-ai">Learn AI</div>
          <img
            className="arrow-drop-down-icon"
            alt=""
            src="/arrowdropdown.svg"
          />
        </div>
        <div className="menu-item1">
          <div className="learn-ai">Marketplace</div>
          <img
            className="arrow-drop-down-icon2"
            alt=""
            src="/arrowdropdown1.svg"
          />
        </div>
        <div className="menu-item1">
          <div className="learn-ai">AI Planet for Teams</div>
          <img
            className="arrow-drop-down-icon2"
            alt=""
            src="/arrowdropdown2.svg"
          />
        </div>
        <div className="menu-item1">
          <div className="learn-ai">About Us</div>
          <img
            className="arrow-drop-down-icon2"
            alt=""
            src="/arrowdropdown2.svg"
          />
        </div>
        <div className="menu-item1">
          <div className="learn-ai">Wall of Love ❤</div>
          <img
            className="arrow-drop-down-icon2"
            alt=""
            src="/arrowdropdown.svg"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;

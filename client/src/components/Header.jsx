import React from "react";
import {connect} from "react-redux";

const Header = ({auth}) => {
  const renderContent = () => {
    switch(auth) {
      case null:
        return "still deciding...";
      case false:
        return "I'm logged out";
      default:
        return "I'm logged in";
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <a className="left brand-logo">Emaily</a>
        <ul className="right">
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({auth}) => {
  return {auth}
};

export default connect(mapStateToProps)(Header);
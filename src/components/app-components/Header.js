import React from "react";
import { Link } from "react-router-dom";
import Image from "../../images/rick-morty.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={Image} alt="logo" className="headerImg" />
      </Link>
    </header>
  );
};

export default Header;

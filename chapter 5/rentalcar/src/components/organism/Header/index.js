import React from "react";
import Nav from "components/organism/Nav";
import { navList } from "jsonData/navList";
const Header = () => {
  const props = {
    navList,
  };
  return (
    <div className="bg-blue-100">
      <Nav {...props} />
    </div>
  );
};

export default Header;

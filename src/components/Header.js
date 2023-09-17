import React from "react";

const Header = ({ pageTitle }) => {
  return (
    <h1 className="text-4xl text-center pb-12 pt-8 font-title font-bold">
      {pageTitle}
    </h1>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="p-2 m-2 min-w-screen bg-blue-200 flex flex-col  font-bold text-center text-3xl items-center justify-center md:flex-row">
        <Link to={"/"}>🏡</Link>
      </div>
    </>
  );
};

export default Header;

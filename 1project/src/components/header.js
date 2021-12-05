import React from "react";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <div className="bg-white shadow-2xl ">
      <div className="container mx-auto">
        <div className="justify-between sm:flex">
          <Link
            to="/"
            className="p-3 text-3xl font-bold text-gray-600 rounded-md hover:bg-gray-100"
          >
            WEB ZONE
          </Link>
          <ul className="items-end text-xl text-gray-600 border-t sm:border-none sm:self-center">
            <li className="sm:inline-block">
              <Link to="/" className="p-3 rounded-md hover:bg-gray-100">
                Home
              </Link>
            </li>
            <li className="sm:inline-block">
              <Link to="/about" className="p-3 rounded-md hover:bg-gray-100">
                About Me
              </Link>
            </li>
            <li className="sm:inline-block">
              <Link
                to="/experience"
                className="p-3 rounded-md hover:bg-gray-100"
              >
                Experience
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;

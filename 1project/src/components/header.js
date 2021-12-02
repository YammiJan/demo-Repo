import React from "react";

function AppHeader() {
  return (
    <div className="bg-white shadow-2xl ">
      <div className="container mx-auto">
        <div className="justify-between sm:flex">
          <a href="#" className="p-3 text-3xl font-bold text-gray-600">
            WEB ZONE
          </a>
          <ul className="items-end text-xl text-gray-600 border-t sm:border-none sm:self-center">
            <li className="sm:inline-block">
              <a href="#" className="p-3 rounded-md hover:bg-gray-100 ">
                Home
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="#" className="p-3 rounded-md hover:bg-gray-100">
                About Me
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="#" className="p-3 rounded-md hover:bg-gray-100">
                Experience
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="#" className="p-3 rounded-md hover:bg-gray-100">
                Teaching
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="#" className="p-3 rounded-md hover:bg-gray-100">
                Research
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="#" className="p-3 rounded-md hover:bg-gray-100">
                Projects
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="#" className="p-3 rounded-md hover:bg-gray-100">
                Publications
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;

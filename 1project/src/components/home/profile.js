import React from "react";

function AppProfile() {
  return (
    <div className="flex items-center justify-center pt-32 mx-auto space-x-5 text-blue-900 h-36">
      {/* Email and books  */}
      <div className="items-center justify-between space-y-3">
        <h1 className="text-3xl font-extrabold text-black">
          Creative <span className="text-gray-600">UI/UX</span>
          <p>Designer & Developer</p>
        </h1>
        <p className="font-bold text-black">
          Email: <span className="text-gray-600">cydenowitzki@gmail.com</span>
        </p>
        <h2 className="flex items-center justify-center space-x-3 font-medium text-black">
          <p className="pr-2 border-r-2 border-gray-300 ">
            İlk Basım: Mart 1998
          </p>
          <p className="pr-2 border-r-2 border-gray-300">
            İlk Basım: Ekim 1999
          </p>
          <p className="">Mayıs 2003</p>
        </h2>
      </div>
      {/* image  */}
      <div className="pt-3 pl-1 ">
        <img
          className="rounded-3xl"
          width="250"
          height="210"
          src="http://gumuskaya.com/images/haluk2014.JPG"
          alt="gumskaya"
        />
      </div>
      {/* name and profession  */}
      <div className="items-center justify-between space-y-3">
        <h1 className="text-xl font-medium text-black">
          HI , I am <span className="text-gray-600">Halûk Gümüşkaya,</span>
        </h1>
        <p className="font-bold text-black ">
          Profession :
          <span className="px-2 text-gray-600">
            Professor of Computer Engineering.
          </span>
        </p>
      </div>
    </div>
  );
}

export default AppProfile;

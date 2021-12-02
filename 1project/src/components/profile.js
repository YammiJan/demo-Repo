import React from "react";

function AppProfile() {
  return (
    <div className="flex h-12 mx-auto space-x-5 text-blue-900">
      <div className="pt-3 pl-1">
        <img
          width="250"
          height="210"
          src="http://gumuskaya.com/images/haluk2014.JPG"
          alt="gumskaya"
        />
      </div>
      <div className="space-y-3 ">
        <h1 className="pt-20 ">
          <p className="text-2xl font-bold w-60">Halûk Gümüşkaya</p>
          <p className="">Professor of Computer Engineering</p>
        </h1>
        <h1 className="pt-7">
          <p className="flex space-x-3 ">
            <p className="text-red-600 ">e</p>
            <br />
            <p className="underline">haluk@gumuskaya.com</p>
          </p>
          <p className="flex space-x-3">
            <p className="text-red-600 ">w</p>
            <br />
            <p> // www.gumuskaya.com</p>
          </p>
        </h1>
      </div>
    </div>
  );
}

export default AppProfile;

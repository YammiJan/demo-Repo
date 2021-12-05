import React from "react";
import AwardsAndHonours from "./awardsandhonours";
import Education from "./education";
import Resume from "./resume";
import { Link } from "react-router-dom";
import WorkExperience from "./workexperience";

function AppAbout() {
  return (
    <div className="bg-gray-200 ">
      <div className="pt-20 pl-52 ">
        <div className="flex w-5/6 px-8 py-12 bg-white shadow-xl px- rounded-2xl h-2/4 space-x-14">
          <div className="">
            <img
              className="shadow-xl w-96 h-96"
              src="http://gumuskaya.com/images/haluk2014.JPG"
              alt="gumuskaya.com/images"
            />
          </div>
          <div className="">
            <h1 className="pb-3 text-lg text-gray-700">Intro . . .</h1>
            <h1 className="pb-3 text-xl font-bold">ABOUT ME </h1>
            <p className="pb-3 text-lg text-gray-400">
              <p>Her gün bir yerden göçmek ne iyi, Her gün</p>
              <p>bir yere konmak ne güzel Bulanmadan, donmadan</p>
              <p>akmak ne hoş, Dünle beraber gitti, cancağızım;</p>
              <p>Ne kadar söz varsa düne ait, Şimdi yeni şeyler söylemek</p>
              <p>lazım... Mevlana</p>
            </p>
            <h2 className="flex items-center justify-center pt-5 space-x-3 font-medium text-black">
              <Link
                to="/about/resume"
                className="flex pl-5 pr-2 border-gray-300"
              >
                <img
                  className="w-4 h-4 pt-1 pr-1 "
                  src="http://gumuskaya.com/_themes/radius/aradbul1.gif"
                  alt="logo"
                />
                <h1>Resume</h1>
              </Link>
              <Link to="/about/workexperience" className="flex pl-3 pr-2 ">
                <img
                  className="w-4 h-4 pt-1 pr-1 "
                  src="http://gumuskaya.com/_themes/radius/aradbul1.gif"
                  alt="logo"
                />
                <h1> Work Experience</h1>
              </Link>
            </h2>
            <h2 className="flex items-center justify-center pt-3 space-x-3 font-medium text-black">
              <Link
                to="/about/education"
                className="flex pl-12 pr-2 border-gray-300"
              >
                <img
                  className="w-4 h-4 pt-1 pr-1 "
                  src="http://gumuskaya.com/_themes/radius/aradbul1.gif"
                  alt="logo"
                />
                <h1>Education</h1>
              </Link>
              <Link to="/about/AwardsAndHonours" className="flex pr-2 ">
                <img
                  className="w-4 h-4 pt-1 pr-1 "
                  src="http://gumuskaya.com/_themes/radius/aradbul1.gif"
                  alt="logo"
                />
                <h1> Awards And Honours</h1>
              </Link>
            </h2>
          </div>
        </div>
        <Resume />
        <WorkExperience />
        <Education />
        <AwardsAndHonours />
      </div>
    </div>
  );
}

export default AppAbout;

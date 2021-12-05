import React from "react";

function Education() {
  return (
    <div className="pt-8">
      <h1 className="text-2xl font-bold">Education</h1>
      {/* first paragraph  */}
      <div className="pt-10 pl-14">
        <div className="flex items-center space-x-32 text-center ">
          <img
            src="http://gumuskaya.com/images/it%C3%BC-logo.JPG"
            alt="http://gumuskaya.com/images/it%C3%BC-logo.JPG"
            className="bg-white w-30 h-30"
          />
          <img
            src="http://gumuskaya.com/images/ari-anim.gif"
            alt="http://gumuskaya.com/images/ari-anim.gif"
            className="w-48 h-48 bg-white"
          />
        </div>
        <p className="pt-2 ">
          <span className="text-base font-bold"> Ph. D.,</span>
          <span className="underline">
            {" "}
            Computer Engineering, İstanbul Technical University
          </span>
          , July 1995
        </p>
        <p className="pt-2 ">
          <span className="text-base font-bold"> Thesis:</span>
          <span className="underline">
            {" "}
            A Parallel Computer Hardware and Software Architecture for Digital
            Signal Processing
          </span>
        </p>
        <p className="pt-2 ">
          <span className="text-base font-bold"> Advisor:</span>
          <span className="underline"> Prof. Dr. Bülent Örencik.</span>
        </p>
      </div>
      {/* second paragraph  */}
      <div className="pt-10 pl-14">
        <div className="flex items-center space-x-32 text-center ">
          <img
            src="http://gumuskaya.com/images/Wisconsin-logo.JPG"
            alt="http://gumuskaya.com/images/Wisconsin-logo.JPG"
            className="bg-white w-44 h-44"
          />
          <img
            src="http://gumuskaya.com/images/wisconsin-logo2.JPG"
            alt="http://gumuskaya.com/images/wisconsin-logo2.JPG"
            className="w-40 h-40 bg-white"
          />
        </div>
        <p className="pt-2 ">
          <span className="text-base font-bold"> M. S.,</span>
          <span className="underline">
            {" "}
            Electrical and Computer Engineering, University of Wisconsin-
          </span>
          USA, December 1989
        </p>
        <p className="pt-2 ">
          <span className="text-base font-bold"> Thesis:</span>
          <span className=""> : Galaxy Hardware Description Language</span>
        </p>
        <p className="pt-2 ">
          <span className="text-base font-bold"> Advisor:</span>
          <span className=""> Dr. John F. Beetem</span>
        </p>
      </div>
      {/* third paragraph  */}
      <div className="pt-10 pl-14">
        <div className="flex items-center space-x-32 text-center ">
          <img
            src="http://gumuskaya.com/images/ODTU.jpg"
            alt="http://gumuskaya.com/images/Wisconsin-logo.JPG"
            className="bg-white w-44 h-44"
          />
          <img
            src="http://gumuskaya.com/images/ODTU-bilim_agaci.JPG"
            alt="http://gumuskaya.com/images/wisconsin-logo2.JPG"
            className="w-40 h-40 bg-white"
          />
        </div>
        <p className="pt-2 ">
          <span className="text-base font-bold"> M. S.,</span>
          <span> Electrical and Electronics Engineering,</span>
          <span className="underline"> Middle East Technical University,</span>
          July 1986
        </p>
      </div>
    </div>
  );
}

export default Education;

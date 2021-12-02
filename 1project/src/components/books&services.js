import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function BooksAndServices() {
  return (
    <div className="pt-48 text-blue-900">
      {/* first paragraph  */}
      <div className="border-t">
        <div className="p-2">
          <h1 className="h-8 text-xl bg-gray-300">
            Eğitim / Araştırma Alanları (Teaching / Research Areas) (1986 - ...)
            <p className="flex px-3 pt-3 space-x-4">
              <p>
                <AiOutlineArrowRight className="pt-1.5" />
              </p>

              <p> Software Engineering</p>
            </p>
            <p className="flex px-3 space-x-4">
              <p>
                <AiOutlineArrowRight className="pt-1.5" />
              </p>

              <p>Data Science: Big Data, Data Mining and Machine Learning</p>
            </p>
            <p className="flex px-3 space-x-4">
              <p>
                <AiOutlineArrowRight className="pt-1.5" />
              </p>

              <p>Cloud Computing, Distributed Systems, Pervasive Computing</p>
            </p>
            <p className="flex px-3 space-x-4">
              <p>
                <AiOutlineArrowRight className="pt-1.5" />
              </p>

              <p>Computer Networking, Mobile and Wireless Networking</p>
            </p>
            <p className="flex px-3 space-x-4">
              <p>
                <AiOutlineArrowRight className="pt-1.5" />
              </p>

              <p>
                Computer Architecture, Microprocessors, Logic Design and
                Circuits
              </p>
            </p>
            <p className="flex px-3 space-x-4">
              <p>
                <AiOutlineArrowRight className="pt-1.5" />
              </p>

              <p> Embedded Systems, Microcontrollers</p>
            </p>
            <p className="flex px-3 space-x-4">
              <p>
                <AiOutlineArrowRight className="pt-1.5" />
              </p>

              <p>Computer Programming (Java, C/C++, Assembly, ...)</p>
            </p>
          </h1>
          {/* second paragraph  */}
          <div className="border-t">
            <h1 className="h-8 text-xl bg-gray-300 mt-60 ">
              Araştırma (Research )
            </h1>
            <h2 className="flex items-center p-3 space-x-4 justify-items-center">
              <img
                src="http://gumuskaya.com/network.jpg"
                width="110"
                height="79"
                alt="khang"
              />
              <p className="underline">
                Networking and Software Engineering Lab (NetSELab)
              </p>
            </h2>
          </div>
          {/* third paragraph  */}
          <div className="border-t">
            <h1 className="h-8 text-xl bg-gray-300 ">Kitaplarım (My Books)</h1>
            <h2 className="p-3 space-x-4 ">
              <p
                width="148"
                height="170"
                src="http://gumuskaya.com/images/Mikro8051Kapak-k.jpg"
                alt="books"
              >
                <p>6. Basım</p>
                <p>İlk Basım: Mart 1998</p>
              </p>
              <p
                width="148"
                height="170"
                src="http://gumuskaya.com/images/MikroBilgiKapak.jpg"
                alt="books"
              >
                <p>6. Basım</p>
                <p>İlk Basım: Ekim 1999</p>
              </p>
              <p
                width="148"
                height="170"
                src="http://gumuskaya.com/images/jap-kapak-web.jpg"
                alt="books"
              >
                <p>1. Basım</p>
                <p>Mayıs 2003</p>
              </p>
            </h2>
          </div>
          {/* 4 paragraph  */}
          <div className="">
            <div className="">
              <h1 className="h-8 text-xl bg-gray-300">
                Çeşitli (Misc.)
                <p className="flex px-3 pt-3 space-x-4">
                  <p>
                    <AiOutlineArrowRight className="pt-1.5" />
                  </p>

                  <p className="underline">
                    Academia: CENG/EEE Departments in Turkey, Universities,
                    Research Centers
                  </p>
                </p>
                <p className="flex px-3 space-x-4">
                  <p>
                    <AiOutlineArrowRight className="pt-1.5" />
                  </p>

                  <p className="underline">
                    Academic Resources and Publications
                  </p>
                </p>
                <p className="flex px-3 space-x-4">
                  <p>
                    <AiOutlineArrowRight className="pt-1.5" />
                  </p>

                  <p className="underline">
                    Software Engineering Software Engineering Classics Software
                    Design and Documentation
                  </p>
                </p>
                <p className="flex px-3 space-x-4">
                  <p>
                    <AiOutlineArrowRight className="pt-1.5" />
                  </p>

                  <p className="underline">
                    Computer Science Student Resources, William Stallings
                  </p>
                </p>
                <p className="flex px-3 space-x-4">
                  <p>
                    <AiOutlineArrowRight className="pt-1.5" />
                  </p>

                  <p className="underline">
                    Writing for Research and Technical Work
                  </p>
                </p>
                <p className="flex px-3 space-x-4">
                  <p>
                    <AiOutlineArrowRight className="pt-1.5" />
                  </p>

                  <p className="underline">
                    Top 10 Reasons to Major in Computing
                  </p>
                </p>
                <p className="flex px-3 space-x-4">
                  <p>
                    <AiOutlineArrowRight className="pt-1.5" />
                  </p>

                  <p className="pb-10 underline">
                    Computer Science, Software Engineering, Computer
                    Engineering, ...What are the Differences?
                  </p>
                </p>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksAndServices;

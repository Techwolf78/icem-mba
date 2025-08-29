import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../../assets/images/brochure-bg.png";

function CompBrochure() {
  return (
    <div className="relative flex justify-between items-center text-white shadow-lg h-auto md:h-48 px-4 md:px-16 py-6 md:py-0 poppins-regular bg-[#FCFAEE]">
      {/* Orange overlay above background image */}
      <div className="absolute inset-0 bg-[#FCFAEE] opacity-90 z-0 mix-blend-multiply rounded-3xl"></div>
      <div className="relative w-full bg-[#F37021] p-4 md:p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center z-10">
        <div className="max-w-full md:max-w-2/3 mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
            Get the brochure to explore our industry-aligned, outcome-based curriculum and complete programme details.
          </h2>
          <p className="text-base md:text-lg text-gray-100"></p>
        </div>
        <div>
          <button className="bg-white border-2 border-[#F37021] text-[#F37021] px-4 md:px-6 py-2 md:py-3 rounded-3xl font-semibold flex items-center space-x-2 shadow-md transition-all duration-200 hover:bg-white hover:text-[#F37021] hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F37021] mx-auto md:mx-0">
            <FontAwesomeIcon
              icon={faDownload}
              className="transition-colors duration-200"
            />
            <span>Download Brochure</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompBrochure;
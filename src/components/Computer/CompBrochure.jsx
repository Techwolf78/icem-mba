import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../../assets/images/brochure-bg.png";

function CompBrochure() {
  return (
    <div className="relative flex justify-between items-center text-white shadow-lg h-48 px-8 md:px-16 poppins-regular bg-[#FCFAEE]">
      {/* Orange overlay above background image */}
      <div className="absolute inset-0 bg-[#FCFAEE] opacity-90 z-0 mix-blend-multiply rounded-3xl"></div>
      <div className="relative w-full bg-[#F37021] p-6 rounded-3xl flex justify-between items-center z-10">
        <div className="max-w-2/3">
          <h2 className="text-2xl font-bold mb-4">Syllabus</h2>
          <p className="text-lg text-gray-100">
            Best-in-class content by leading trainers and industry leaders in
            the form of videos, real life case studies, projects and
            live-sessions.
          </p>
        </div>
        <div>
          <button className="bg-white border-2 border-[#F37021] text-[#F37021] px-6 py-3 rounded-3xl font-semibold flex items-center space-x-2 shadow-md transition-all duration-200 hover:bg-white hover:text-[#F37021] hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F37021]">
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

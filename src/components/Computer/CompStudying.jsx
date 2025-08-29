import React, { useEffect, useRef, useState } from 'react';
import { FaStar, FaBuilding, FaUsers, FaLaptop, FaGraduationCap, FaChartLine } from 'react-icons/fa';
import MyImage from '../../assets/images/std-mba.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CompStudying() {
  const leftRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState('auto');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    function updateHeight() {
      if (leftRef.current && window.innerWidth >= 768) {
        setLeftHeight(leftRef.current.offsetHeight + 'px');
      } else {
        setLeftHeight('auto');
      }
    }
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-4 md:px-16 py-6 poppins-regular" style={{ background: '#F7F3EF' }}>
      {/* Left Side - Full width on mobile, 70% on desktop */}
      <div className="w-full md:w-[70%] md:pr-8" data-aos="fade-right" ref={leftRef}>
        <h1 className="text-2xl md:text-4xl font-semibold text-left mb-2 md:mb-4">Studying with Indira College of</h1>
        <h1 className="text-2xl md:text-4xl font-extralight text-left text-[#F37021] mb-4 md:mb-6">Engineering & Management</h1>
        <p className="text-left text-base md:text-lg mb-4 md:mb-6" data-aos="fade-up">
          Indira College of Engineering & Management offers a robust academic environment, blending advanced 
          theoretical knowledge with practical applications. We provide our students with opportunities to excel 
          both in academics and in real-world industry settings.
        </p>

        {/* Grid for Cards - 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          {/* Card 1 */}
          <div className="bg-white p-3 md:p-4 shadow-lg shadow-orange-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex items-center">
              <FaStar className="text-[#F37021] mr-2 md:mr-4 text-2xl md:text-4xl" /> 
              <span className="text-xs md:text-sm">15+ YEARS OF ACADEMIC EXCELLENCE</span>
            </span>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-3 md:p-4 shadow-lg shadow-orange-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex items-center">
              <FaUsers className="text-[#F37021] mr-2 md:mr-4 text-2xl md:text-4xl" /> 
              <span className="text-xs md:text-sm">350+ LEADING RECRUITERS</span>
            </span>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-3 md:p-4 shadow-lg shadow-orange-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex items-center">
              <FaBuilding className="text-[#F37021] mr-2 md:mr-4 text-2xl md:text-4xl" /> 
              <span className="text-xs md:text-sm">STRONG INDUSTRY-INSTITUTE INTERACTION</span>
            </span>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-3 md:p-4 shadow-lg shadow-orange-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex items-center">
              <FaLaptop className="text-[#F37021] mr-2 md:mr-4 text-2xl md:text-4xl" /> 
              <span className="text-xs md:text-sm">42 LAKHS HIGHEST PACKAGE OFFERED</span>
            </span>
          </div>
          {/* Card 5 */}
          <div className="bg-white p-3 md:p-4 shadow-lg shadow-orange-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex items-center">
              <FaGraduationCap className="text-[#F37021] mr-2 md:mr-4 text-2xl md:text-4xl" /> 
              <span className="text-xs md:text-sm">STATE OF THE ART INFRASTRUCTURE</span>
            </span>
          </div>
          {/* Card 6 */}
          <div className="bg-white p-3 md:p-4 shadow-lg shadow-orange-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex items-center">
              <FaChartLine className="text-[#F37021] mr-2 md:mr-4 text-2xl md:text-4xl" />
              <span className="text-xs md:text-sm">PRACTICAL LEARNING APPROACH</span>
            </span>
          </div>
        </div>
      </div>

      {/* Right Side - Full width on mobile, 30% on desktop */}
      <div className="w-full md:w-[30%] flex items-center justify-center bg-white p-0 overflow-hidden mt-6 md:mt-0" 
           data-aos="fade-left" 
           style={{height: window.innerWidth >= 768 ? leftHeight : 'auto', minHeight: 0}}>
        <img src={MyImage} alt="Indira College Image" className="w-full h-auto md:h-full object-cover" />
      </div>
    </div>
  );
}

export default CompStudying;
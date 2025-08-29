import React, { useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; 
import { FaRegClock } from 'react-icons/fa';  
import { FaMoneyBillWave } from 'react-icons/fa'; 

// Import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function CompPointers() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-16 py-8 sm:py-12 poppins-regular">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        {/* Card 1: Program Format */}
        <div
          className="bg-[#FFF6F2] p-4 sm:p-6 shadow-lg flex items-center justify-center"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center space-x-4">
            <FaCalendarAlt size={30} className="text-[#F37021] sm:text-3xl md:text-4xl" />
            <div className="text-center">
              <h2 className="text-base sm:text-lg md:text-xl font-medium">Programme Format</h2>
              <p className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold">Offline</p>
            </div>
          </div>
        </div>

        {/* Card 2: Duration */}
        <div
          className="bg-[#FFF6F2] p-4 sm:p-6 shadow-lg flex items-center justify-center"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center space-x-4">
            <FaRegClock size={30} className="text-[#F37021] sm:text-3xl md:text-4xl" />
            <div className="text-center">
              <h2 className="text-base sm:text-lg md:text-xl font-medium">Duration</h2>
              <p className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold">2 Years</p>
            </div>
          </div>
        </div>

        {/* Card 3: Program Fees */}
        <div
          className="bg-[#FFF6F2] p-4 sm:p-6 shadow-lg flex items-center justify-center"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center space-x-4">
            <FaMoneyBillWave size={30} className="text-[#F37021] sm:text-3xl md:text-4xl" />
            <div className="text-center">
              <h2 className="text-base sm:text-lg md:text-xl font-medium">Programme Fees</h2>
              <p className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold">Rs. 2,39,493 /-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompPointers;

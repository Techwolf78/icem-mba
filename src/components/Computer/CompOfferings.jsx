import { FaGraduationCap, FaBuilding, FaBookOpen, FaLaptop, FaLanguage, FaUniversity, FaBriefcase, FaChalkboardTeacher, FaDesktop } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function CompOfferings() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 300, // Further reduced duration for even faster animations
      once: true,
      easing: 'ease-out-cubic'
    });

    // GSAP animations for the section title
    gsap.fromTo('.section-title', 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.2, // Even faster animation duration
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Enhanced card animations with staggered timing
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      const circle = card.querySelector('.circle');
      const icon = card.querySelector('.icon');
      const content = card.querySelector('.content');
      
      // Initial state
      gsap.set(circle, { 
        scale: 0.8, 
        opacity: 0, 
        x: 20, 
        y: 20 
      });
      
      gsap.set(icon, { 
        rotationY: 0, 
        scale: 0.9 
      });
      
      // Hover animations
      card.addEventListener('mouseenter', () => {
        // Card elevation
        gsap.to(card, {
          y: -8,
          duration: 0.1, // Even faster animation duration
          ease: 'power2.out'
        });
        
        // Circle reveal
        gsap.to(circle, {
          scale: 1,
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.2, // Even faster animation duration
          ease: 'back.out(1.7)'
        });
        
        // Icon animation
        gsap.to(icon, {
          rotationY: 360,
          scale: 1.1,
          duration: 0.3, // Even faster animation duration
          ease: 'back.out(1.7)'
        });
        
        // Content emphasis
        gsap.to(content, {
          y: -5,
          duration: 0.1, // Even faster animation duration
          ease: 'power1.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        // Reset card position
        gsap.to(card, {
          y: 0,
          duration: 0.2, // Even faster animation duration
          ease: 'power2.out'
        });
        
        // Hide circle
        gsap.to(circle, {
          scale: 0.8,
          opacity: 0,
          x: 20,
          y: 20,
          duration: 0.1, // Even faster animation duration
          ease: 'power2.in'
        });
        
        // Reset icon
        gsap.to(icon, {
          rotationY: 0,
          scale: 0.9,
          duration: 0.2, // Even faster animation duration
          ease: 'power2.out'
        });
        
        // Reset content
        gsap.to(content, {
          y: 0,
          duration: 0.1, // Even faster animation duration
          ease: 'power1.out'
        });
      });

      // Staggered entrance animation for cards
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.2, // Even faster animation duration
          delay: index * 0.03, // Further reduced delay for faster stagger
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  // Add to card refs array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div ref={sectionRef} className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#f8f9fa] to-[#ffffff] poppins-regular overflow-hidden">
      <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-[#2d3748] tracking-tight" data-aos="fade-up">
  Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#ff8c42]">Offerings</span> 
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Excellent Academic Interface */}
        <div
          ref={addToRefs}
          className="group bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center h-full relative transform transition-all duration-500 hover:shadow-2xl border border-[#f0f0f0] overflow-hidden"
          data-aos="fade-up"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F37021] to-[#ffad42]"></div>
          <div className="mb-5 p-3 rounded-full bg-gradient-to-br from-[#fff5eb] to-[#ffedd5] group-hover:from-[#ffedd5] group-hover:to-[#fed7aa] transition-all duration-500">
            <FaGraduationCap size={42} className="text-[#F37021] icon transition-all duration-500" />
          </div>
          <div className="content">
            <p className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300">Excellent Academic Interface</p>
            <p className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2">
              Cutting-edge curriculum designed by industry experts
            </p>
          </div>
          <div className="circle absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-[#F37021] to-[#ffad42] rounded-full shadow-lg"></div>
        </div>

        {/* Quality Holistic Infrastructure */}
        <div
          ref={addToRefs}
          className="group bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center h-full relative transform transition-all duration-500 hover:shadow-2xl border border-[#f0f0f0] overflow-hidden"
          data-aos="fade-up"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F37021] to-[#ffad42]"></div>
          <div className="mb-5 p-3 rounded-full bg-gradient-to-br from-[#fff5eb] to-[#ffedd5] group-hover:from-[#ffedd5] group-hover:to-[#fed7aa] transition-all duration-500">
            <FaUniversity size={42} className="text-[#F37021] icon transition-all duration-500" />
          </div>
          <div className="content">
            <p className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300">Quality Holistic Infrastructure</p>
            <p className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2">
              State-of-the-art facilities for comprehensive development
            </p>
          </div>
          <div className="circle absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-[#F37021] to-[#ffad42] rounded-full shadow-lg"></div>
        </div>

        {/* Customized MPSC/MPSC-ES/UPSC Training Program */}
        <div
          ref={addToRefs}
          className="group bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center h-full relative transform transition-all duration-500 hover:shadow-2xl border border-[#f0f0f0] overflow-hidden"
          data-aos="fade-up"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F37021] to-[#ffad42]"></div>
          <div className="mb-5 p-3 rounded-full bg-gradient-to-br from-[#fff5eb] to-[#ffedd5] group-hover:from-[#ffedd5] group-hover:to-[#fed7aa] transition-all duration-500">
            <FaChalkboardTeacher size={42} className="text-[#F37021] icon transition-all duration-500" />
          </div>
          <div className="content">
            <p className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300">Customized MPSC/MPSC-ES /UPSC Training Program</p>
            <p className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2">
              Personalized coaching for optimal exam preparation
            </p>
          </div>
          <div className="circle absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-[#F37021] to-[#ffad42] rounded-full shadow-lg"></div>
        </div>

        {/* Guaranteed Core Placements for Core Branches */}
        <div
          ref={addToRefs}
          className="group bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center h-full relative transform transition-all duration-500 hover:shadow-2xl border border-[#f0f0f0] overflow-hidden"
          data-aos="fade-up"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F37021] to-[#ffad42]"></div>
          <div className="mb-5 p-3 rounded-full bg-gradient-to-br from-[#fff5eb] to-[#ffedd5] group-hover:from-[#ffedd5] group-hover:to-[#fed7aa] transition-all duration-500">
            <FaBriefcase size={42} className="text-[#F37021] icon transition-all duration-500" />
          </div>
          <div className="content">
            <p className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300">Guaranteed Core Placements for Core Branches</p>
            <p className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2">
              Industry partnerships ensuring relevant career opportunities
            </p>
          </div>
          <div className="circle absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-[#F37021] to-[#ffad42] rounded-full shadow-lg"></div>
        </div>

        {/* Product Companies for Campus Placements */}
        <div
          ref={addToRefs}
          className="group bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center h-full relative transform transition-all duration-500 hover:shadow-2xl border border-[#f0f0f0] overflow-hidden"
          data-aos="fade-up"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F37021] to-[#ffad42]"></div>
          <div className="mb-5 p-3 rounded-full bg-gradient-to-br from-[#fff5eb] to-[#ffedd5] group-hover:from-[#ffedd5] group-hover:to-[#fed7aa] transition-all duration-500">
            <FaDesktop size={42} className="text-[#F37021] icon transition-all duration-500" />
          </div>
          <div className="content">
            <p className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300">Product Companies for Campus Placements</p>
            <p className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2">
              Direct recruitment opportunities with leading tech firms
            </p>
          </div>
          <div className="circle absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-[#F37021] to-[#ffad42] rounded-full shadow-lg"></div>
        </div>

        {/* Foreign Languages (German, Japanese, French) */}
        <div
          ref={addToRefs}
          className="group bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center h-full relative transform transition-all duration-500 hover:shadow-2xl border border-[#f0f0f0] overflow-hidden"
          data-aos="fade-up"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F37021] to-[#ffad42]"></div>
          <div className="mb-5 p-3 rounded-full bg-gradient-to-br from-[#fff5eb] to-[#ffedd5] group-hover:from-[#ffedd5] group-hover:to-[#fed7aa] transition-all duration-500">
            <FaLanguage size={42} className="text-[#F37021] icon transition-all duration-500" />
          </div>
          <div className="content">
            <p className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300">Foreign Languages (German, Japanese, French)</p>
            <p className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2">
              Comprehensive language programs for global opportunities
            </p>
          </div>
          <div className="circle absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-[#F37021] to-[#ffad42] rounded-full shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default CompOfferings;